<template>
  <div class="home">
    <h1>This is home page</h1>

    <h1 v-for="(todo, index) in todos" :key="index">{{ todo }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomeView",
  setup() {
    const store = useStore();

    const todos = ref(store.state.todos);

    // store.state.todos;

    return { todos };
  },
});
</script>
