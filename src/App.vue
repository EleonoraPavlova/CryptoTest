<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <section>
        <div class="flex">
          <div class="max-w-xs">
            <label for="wallet" class="block text-sm font-medium text-gray-700"
              >Тикер</label
            >
            <div class="mt-1 relative rounded-md shadow-md">
              <input
                v-model="ticker"
                @keydown.enter="add"
                type="text"
                name="wallet"
                id="wallet"
                class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                placeholder="Например DOGE"
              />
            </div>
            <div class="flex bg-white shadow-md p-1 rounded-md flex-wrap">
              <span
                class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
              >
                BTC
              </span>
              <span
                class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
              >
                DOGE
              </span>
              <span
                class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
              >
                BCH
              </span>
              <span
                class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
              >
                CHD
              </span>
            </div>
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
            :isSelected="t === sel"
            :ticker="t"
            @deleted="handleDelete(index)"
            @selected="select(t)"
          />
        </dl>
      </template>
      <section class="relative" v-if="sel">
        <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
          {{ sel.name }} - USD
        </h3>
        <div class="flex items-end border-gray-600 border-b border-l h-64">
          <div
            v-for="(bar, index) in normalizeGraph()"
            :key="index"
            :style="{ height: `${bar}%` }"
            class="bg-purple-800 border w-10"
          ></div>
        </div>
        <button
          @click="sel = null"
          type="button"
          class="absolute top-0 right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 511.76 511.76"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                fill="#718096"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import ButtonAdd from "./components/ButtonAdd.vue";
import TickerBox from "./components/TickerBox.vue";
export default {
  components: {
    ButtonAdd,
    TickerBox,
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
      sel: null, //добавляем по клику на box выпадающую инфу
      graph: [], //данные состояния
    };
  },
  methods: {
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

        if (this.sel?.name === currentTicker.name) {
          this.graph.push(data.USD); //сохраним в график данные
        }
      }, 3000);
      this.ticker = ""; //очищается строка ввода после того, как ввели текст
    },

    select(ticker) {
      this.sel = ticker;
      this.graph = [];
    },
    handleDelete(index) {
      //удаляем тикет по клику кнопки удалить
      this.tickers.splice(index, 1);
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
  },
};
</script>

<style src="./assets/app-style.css"></style>
