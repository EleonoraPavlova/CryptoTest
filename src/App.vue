<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <section class="flex">
        <div class="max-w-xs">
          <LabelJoint>Search</LabelJoint>
          <div class="mt-1 relative rounded-md shadow-md">
            <InputJoint
              v-focus
              v-model="ticker"
              @keydown.enter="add"
              placeholder="Enter......"
            />
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
        <div class="flex items-center">
          <div class="flex-center">
            <InputJoint v-model="filter" placeholder="Filters......" />
            <!--  @update:modelValue="page = 0"   это чтобы поиск был по всем тикерам, а не по текуей странице -->
          </div>
          <template v-if="filteredTickers.length > 0 && tickers.length > limit">
            <ButtonsVue
              v-if="page != 0"
              @click="page = page - 1"
              class="button-margin"
              >Back</ButtonsVue
            >
            <ButtonsVue
              v-if="filteredTickers.length === limit"
              @click="page = page + 1"
              class="button-margin"
              >Forward</ButtonsVue
            >
            <div class="flex button-margin">
              <LabelJoint
                >Page: {{ page + 1 }} of {{ countTotalPages }}</LabelJoint
              >
            </div>
          </template>
        </div>

        <!-- скрыли верхнюю полоску -->
        <hr class="w-full border-t border-gray-600 my-4" />
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <!-- выводим массив отфильтрованных тикеров -->
          <TickerBox
            v-for="t in filteredTickers"
            :key="t.name"
            :isSelected="t === selectInfo"
            :ticker="t"
            @deleted="handleDelete(t.name)"
            @selected="select(t)"
          />
          <div class="text-sm text-green-600" v-show="!filteredTickers.length">
            There are no such tickets!
          </div>
        </dl>
        <div></div>
      </template>
      <DropdownGraph
        @closed="close"
        v-if="selectInfo"
        :selectInfo="selectInfo"
        :barGraph="normalizedGraph"
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
      ticker: "", //элемент куда вводим данные (1 input)
      tickers: [
        //массив добавленных тикеров
        // { name: "USD", price: "45", id: 1 },   дефолтн значения
        // { name: "EUR", price: "49", id: 2 },
        // { name: "UAH", price: "36", id: 3 },
      ],
      selectInfo: null, //добавляем по клику на box выпадающую инфу , это {}
      graph: [], //данные состояния, массив потому что данные одного типа будут, если данные разного типа- то объект нужно выбирать
      isVisible: false,
      filter: "", //для фильтра, элемент куда вводим данные (2 input)
      intervals: {}, //очищение для останавл Api, создаем обьект потому что нужно очищать по ключу
      //объект это как коробка с ячейками
      page: 0,
      limit: 6,
    };
  },

  methods: {
    //методы используються если нужно обработчик на кнопку, input и тд
    inputTicker(event) {
      //продолжение двухстороннего связывания input
      this.ticker = event.target.value;
    },

    subscribeToUpdate(tickerName) {
      //функция обновления тикеров курса валют после перезагрузки страницы(написали после того, как подключили localStorage)
      this.intervals[tickerName] = setInterval(async () => {
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
      this.filter = ""; // при добавлении нового тикера сбрасывать фильтер,это обязательно!

      this.subscribeToUpdate(currentTicker.name); // передаем функцию подписки
      this.filter = "";

      this.ticker = ""; //очищается строка ввода после того, как ввели текст
    },

    handleDelete(name) {
      //удаление тикера
      const index = this.tickers.findIndex((ticker) => ticker.name === name);
      //удаляем тикет по клику кнопки удалить и закрываем окно графика одновременно и останавливаем запросы API
      const currencyName = this.tickers[index].name;
      clearInterval(this.intervals[currencyName]);
      this.tickers.splice(index, 1);
      this.selectInfo = null;
      if (this.filter.length === 0) {
        this.filter = "";
      }
      if (this.page != 0 && this.filteredTickers.length === 0) {
        // перебрасываем пользователя с пустой страицы на ту, где есть тикеры
        this.page--;
      }
    },
    close() {
      this.selectInfo = null;
    },
    select(ticker) {
      //выбираем тикер
      this.selectInfo = ticker;
    },

    onCurrencySelected(clickedCurrency) {
      this.ticker = clickedCurrency;
      this.add();
    },
    resetPagination() {
      this.page = 0;
    },
  },
  created() {
    //Object.entries(obj) – возвращает массив пар [ключ, значение]
    //грузим данные из url
    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );
    if (windowData.filter) {
      this.filter = windowData.filter;
    }
    if (windowData.page) {
      this.page = +windowData.page;
    }
    // /*eslint-disable*/
    // debugger;
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
  computed: {
    // вычисляет значение свойства, которое может зависеть от других свойств, но делает это лишь тогда, когда какое-то из них изменилось.
    filteredTickers() {
      //выводить элементы будем по 6 тикеров, значит 1 страница - 6 тикеров
      const start = this.page * this.limit;
      const end = start + this.limit;
      //фильтрация введеных пользователем данных

      const tickersFilter = this.tickers.filter((ticker) =>
        ticker.name.toUpperCase().includes(this.filter.toUpperCase())
      );

      return tickersFilter.slice(start, end); //фильтровать будем по соответствию
    },
    countTotalPages() {
      return Math.ceil(this.tickers.length / this.limit);
    },
    normalizedGraph() {
      if (this.graph.length < 2) {
        return [];
      }
      const maxValue = Math.max(...this.graph);
      const minValue = Math.min(...this.graph);
      if (maxValue === minValue) {
        //оптимизация работы графика и среднее зечение 50
        return this.graph.map(() => 50);
      }

      return this.graph.map(
        (price) => 5 + ((price - minValue) * 95) / (maxValue - minValue)
      );
    },
    pageStateOptions() {
      return {
        filter: this.filter,
        page: this.page,
      };
    },
  },
  watch: {
    //watch - следит за свойствами, и когда оно меняется, то выполняет функцию.
    //можно не вызывать, сам вызывается когда меняется состояние свойства
    //когда меняется тикер сбрасываем график
    selectInfo() {
      this.graph = [];
    },
    "tickers.length"() {
      //когда меняются тикеры сохраняем тикеры в localStorage
      localStorage.setItem("cryptonomicon-list", JSON.stringify(this.tickers));
    },

    //наблюдаю за изменениями фильтра, перескакиваю на первую страницу по результату буквы
    filter() {
      //когда меняется фильтр, сбрасываем страницу на первую
      //filter / page похожи, они обновляют друг друга( чтобы была одинаковая информация)
      this.page = 0;
    },
    pageStateOptions(value) {
      //когда меняются опции, которые я хочу сохранять в урл
      window.history.pushState(
        null,
        "CryptoCompare",
        //тут пытаемся сделать роутинг по урл без перезагрузки страницы, составляем путь
        `${window.location.pathname}?filter=${value.filter}&page=${value.page}`
      );
    },
  },
};
</script>

<style src="./assets/app-style.css"></style>
