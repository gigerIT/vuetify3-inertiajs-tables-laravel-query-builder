<template>
  <div class="relative">
    <v-input
      class="block w-full pl-9 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
      :placeholder="label"
      :value="value"
      type="text"
      name="global"
      @input="onChange($event.target.value)"
    >
    </v-input>
  </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: "Search...",
        required: false,
    },

    value: {
        type: String,
        default: "",
        required: false,
    },

    onChange: {
        type: Function,
        required: true,
    },
});
</script>

