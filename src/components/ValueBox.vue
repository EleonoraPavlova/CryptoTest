<template>
  <div
    class="flex bg-white shadow-md p-1 rounded-md flex-wrap"
    v-if="searchString && filteredList.length"
  >
    <CurrencyLabel
      @click="clicked(currency)"
      v-for="currency in filteredList"
      :key="currency"
      >{{ currency }}</CurrencyLabel
    >
  </div>
</template>

<script>
import CurrencyLabel from "./CurrencyLabel.vue";
export default {
  components: {
    CurrencyLabel,
  },
  name: "ValueBox",
  data() {
    return {
      supportedCurrencies: [],
    };
  },
  props: {
    searchString: {
      //пропс для фильтрации
      type: String,
      default: "",
    },
  },
  emits: ["currencySelected"],
  methods: {
    clicked(currency) {
      this.$emit("currencySelected", currency);
    },
  },
  async created() {
    //выводим поиск по запросу fetch
    try {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
      );
      const currencies = await response.json();

      this.supportedCurrencies = Object.values(currencies.Data).map(
        (item) => item.Symbol
      );
    } catch (err) {
      console.log(err.name);
    }
  },
  computed: {
    filteredList() {
      // /*eslint-disable*/
      // debugger;
      if (!this.searchString) {
        return this.supportedCurrencies.slice(0, 4);
      } else {
        return this.supportedCurrencies
          .filter((name) =>
            name.toLowerCase().includes(this.searchString.toLowerCase())
          )
          .slice(0, 4);
      }
    },
  },
};
</script>

<style></style>
