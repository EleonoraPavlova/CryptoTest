<template>
  <div
    @click="$emit('selected')"
    :class="{
      'border-4': isSelected, // класс бордер-4, когда selectInfo строго равно t, это объектный синтаксис: ключи это имена классов,
      //а логическое значение - значением(которое отвечат надо добавлять это класс или нет)
    }"
    class="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
  >
    <div class="px-4 py-5 sm:p-6 text-center">
      <dt class="text-sm font-medium text-gray-500 truncate">
        {{ ticker.name }} - USD
      </dt>
      <dd class="mt-1 text-3xl font-semibold text-gray-900">
        {{ formatPrice(ticker.price) }}
      </dd>
    </div>
    <div class="w-full border-t border-gray-200"></div>
    <!-- .stop  чтобы не всплывало другое событие на клик  кроме удаления -->
    <ButtonDelete @click="$emit('deleted')" />
  </div>
</template>

<script>
import formatPrice from "./formatPrice";
import ButtonDelete from "./ButtonDelete.vue";
export default {
  components: {
    ButtonDelete,
  },
  name: "TickerBox",
  props: {
    ticker: {
      type: Object,
      default: null,
    },
    isSelected: {
      type: Boolean,
    },
  },
  emits: ["deleted", "selected"],
  methods: {
    formatPrice,
  },
};
</script>

<style></style>
