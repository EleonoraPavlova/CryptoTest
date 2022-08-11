<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <section>
        <div class="flex">
          <div class="max-w-xs">
            <LabelSearch />
            <div class="mt-1 relative rounded-md shadow-md">
              <InputSearch v-model="ticker" @keydown.enter="add" />
            </div>
            <ValueBox @currencySelected="onCurrencySelected" />
            <div class="text-sm text-red-600">Такой тикер уже добавлен</div>
          </div>
        </div>
        <ButtonAdd @click="add" />
      </section>
      <template v-if="tickers.length > 0">
        <!-- скрыли верхнюю полоску -->
        <hr class="w-full border-t border-gray-600 my-4" />
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <TickerBox
            v-for="(t, index) in tickers"
            :key="t.name"
            :isSelected="t === selectInfo"
            :ticker="t"
            @deleted="handleDelete(index)"
            @selected="select(t)"
          />
        </dl>
      </template>
      <DropdownGraph
        @closed="close"
        v-if="selectInfo"
        :selectInfo="selectInfo"
        :barGraph="normalizeGraph()"
      />
    </div>
  </div>
</template>

<script>
import ButtonAdd from "./components/ButtonAdd.vue";
import TickerBox from "./components/TickerBox.vue";
import ValueBox from "./components/ValueBox.vue";
import DropdownGraph from "./components/DropdownGraph.vue";
import LabelSearch from "./components/LabelSearch.vue";
import InputSearch from "./components/InputSearch.vue";
export default {
  components: {
    ButtonAdd,
    TickerBox,
    ValueBox,
    DropdownGraph,
    LabelSearch,
    InputSearch,
  },
  data() {
    return {
      //props описывают данные, которые поступают на вход компоненты
      //emits описывают те события, которые он генерирует
      ticker: "",
      tickers: [
        // { name: "USD", price: "45", id: 1 },   дефолтн значения
        // { name: "EUR", price: "49", id: 2 },
        // { name: "UAH", price: "36", id: 3 },
      ],
      selectInfo: null, //добавляем по клику на box выпадающую инфу , это {}
      graph: [], //данные состояния
    };
  },
  methods: {
    inputTicker(event) {
      //продолжение двухстороннего связывания input
      this.ticker = event.target.value;
    },
    add() {
      if (!this.ticker) {
        //пустой билет не создавать
        return;
      }
      //обработчик click
      const currentTicker = {
        name: this.ticker,
        price: "-",
      };

      this.tickers.push(currentTicker);
      setInterval(async () => {
        const f = await fetch(
          `https://min-api.cryptocompare.com/data/price?fsym=${currentTicker.name}&tsyms=USD&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a`
        );
        const data = await f.json();
        const finded = this.tickers.find((t) => t.name === currentTicker.name);

        if (data && data.USD && finded) {
          finded.price =
            data.USD > 1 ? data.USD.toFixed(2) : data.USD.toPrecision(2);
        }

        if (this.selectInfo?.name === currentTicker.name) {
          this.graph.push(data.USD); //сохраним в график данные
        }
      }, 3000);
      this.ticker = ""; //очищается строка ввода после того, как ввели текст
    },

    select(ticker) {
      this.selectInfo = ticker;
      this.graph = [];
    },
    handleDelete(index) {
      //удаляем тикет по клику кнопки удалить
      this.tickers.splice(index, 1);
    },
    close() {
      this.selectInfo = null;
    },
    normalizeGraph() {
      if (this.graph.length < 2) {
        return [];
      }
      const maxValue = Math.max(...this.graph);
      const minValue = Math.min(...this.graph);
      // /*eslint-disable*/
      // debugger;
      return this.graph.map(
        (price) => 5 + ((price - minValue) * 95) / (maxValue - minValue)
      );
    },
    onCurrencySelected(clickedCurrency) {
      this.ticker = clickedCurrency;
      this.add();
    },
  },
};
</script>

<style src="./assets/app-style.css"></style>
