<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <section class="flex">
        <div class="max-w-xs">
          <LabelJoint>Search</LabelJoint>
          <div class="mt-1 relative rounded-md shadow-md">
            <InputJoint v-focus v-model="ticker" @keydown.enter="add" />
            <div class="text-sm text-red-600" v-show="isVisible">
              This ticker has already been added
            </div>
          </div>
          <ButtonsVue @click="add">
            <svg
              class="-ml-0.5 mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
            >
              <path
                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              ></path></svg
            >Adds</ButtonsVue
          >
          <ValueBox
            @currencySelected="onCurrencySelected"
            :searchString="ticker"
          />
        </div>
      </section>

      <template v-if="tickers.length > 0">
        <hr class="w-full border-t border-gray-600 my-4" />
        <div class="flex">
          <LabelJoint>Filter: <InputJoint /></LabelJoint>
          <ButtonsVue class="button-margin">Forward</ButtonsVue>
          <ButtonsVue class="button-margin">Back</ButtonsVue>
        </div>
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
import ButtonsVue from "./components/ButtonsVue.vue";
import TickerBox from "./components/TickerBox.vue";
import ValueBox from "./components/ValueBox.vue";
import DropdownGraph from "./components/DropdownGraph.vue";
import LabelJoint from "./components/LabelJoint.vue";
import InputJoint from "./components/InputJoint.vue";
export default {
  components: {
    ButtonsVue,
    TickerBox,
    ValueBox,
    DropdownGraph,
    LabelJoint,
    InputJoint,
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
      isVisible: false,
      timeId: null,
    };
  },

  methods: {
    //методы используються если нужно обработчик на кнопку, input и тд
    inputTicker(event) {
      //продолжение двухстороннего связывания input
      this.ticker = event.target.value;
    },
    subscribeToUpdate(tickerName) {
      //функция обновления загрузки данных курса валют после перезагрузки страницы(написали после того, как подключили localStorage)
      setInterval(async () => {
        const f = await fetch(
          `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a`
        );
        const data = await f.json();
        const finded = this.tickers.find((t) => t.name === tickerName);

        if (data && data.USD && finded) {
          finded.price =
            data.USD > 1 ? data.USD.toFixed(2) : data.USD.toPrecision(2);
        }

        if (this.selectInfo?.name === tickerName) {
          this.graph.push(data.USD); //сохраним в график данные
        }
      }, 3000);
    },
    add() {
      if (!this.ticker) {
        //пустой билет не создавать
        return;
      }
      //вывели надпись " This ticker has already been added" которая появл при условии уже наличия такого же билета
      if (this.tickers.find((item) => item.name === this.ticker)) {
        this.isVisible = true;
        const that = this;
        setTimeout(function () {
          that.isVisible = false;
        }, 5000);
        this.ticker = "";
        return;
      }
      //обработчик click
      const currentTicker = {
        name: this.ticker,
        price: "-",
      };

      this.tickers.push(currentTicker);

      localStorage.setItem("cryptonomicon-list", JSON.stringify(this.tickers));
      // чтобы выбранные добавленные тикеры сохранялись после перезагрузки
      this.subscribeToUpdate(currentTicker.name); // передаем функцию подписки

      this.ticker = ""; //очищается строка ввода после того, как ввели текст
    },

    select(ticker) {
      this.selectInfo = ticker;
      this.graph = [];
    },
    handleDelete(index) {
      //удаляем тикет по клику кнопки удалить и закрываем окно графика одновременно и останавливаем запросы API
      this.tickers.splice(index, 1);
      this.selectInfo = null;
      clearInterval(this.timeId);
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

      return this.graph.map(
        (price) => 5 + ((price - minValue) * 95) / (maxValue - minValue)
      );
    },
    onCurrencySelected(clickedCurrency) {
      this.ticker = clickedCurrency;
      this.add();
    },
  },
  created() {
    //хук, чтобы работал localSrorage сохранял тикеты при обновлении
    const tickersData = localStorage.getItem("cryptonomicon-list");
    if (tickersData) {
      this.tickers = JSON.parse(tickersData);
      this.tickers.forEach((ticker) => {
        //подписка на обновления после загрузки страницы, последний 3 шаг
        this.subscribeToUpdate(ticker.name);
      });
    }
  },
};
</script>

<style src="./assets/app-style.css"></style>
