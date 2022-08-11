<template>
  <div class="flex bg-white shadow-md p-1 rounded-md flex-wrap">
    <CurrencyLabel
      @click="clicked(currency)"
      v-for="currency in supportedCurrencies"
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
      supportedCurrencies: ["BTC", "DOGE", "BCH", "CHD"],
    };
  },
  emits: ["currencySelected"],
  methods: {
    clicked(currency) {
      this.$emit("currencySelected", currency);
    },
  },
};
</script>

<style></style>
