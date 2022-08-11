<template>
  <section class="relative">
    <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
      <!--пропс должен быть обязательно записан в этом же файле, и передан потом родителем(родитель передает проспы ребенку) вот так  -->
      <!--   :selectInfo="selectInfo"
        :barGraph="normalizeGraph()" -->
      {{ selectInfo.name }} - USD
    </h3>
    <div class="flex items-end border-gray-600 border-b border-l h-64">
      <div
        v-for="(bar, index) in barGraph"
        :key="index"
        :style="{ height: `${bar}%` }"
        class="bg-purple-800 border w-10"
      ></div>
    </div>
    <ButtonClose @click="$emit('closed')" />
  </section>
</template>

<script>
import ButtonClose from "./ButtonClose.vue";
export default {
  components: {
    ButtonClose,
  },
  name: "DropdownGraph",
  props: {
    selectInfo: {
      type: Object,
      default: null,
    },
    barGraph: {
      type: Array,
      default: () => [],
    },
  },

  emits: ["closed"],
};
</script>

<style></style>
