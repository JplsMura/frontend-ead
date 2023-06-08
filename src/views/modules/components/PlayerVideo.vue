<template>
  <div class="training">
    <div class="card bg-laravel">
      <span class="icon">
        <img src="images/icons/laravel.svg" alt="" />
      </span>
      <span class="title">{{ lesson.name }}</span>

      <router-link :to="{ name: 'campus.home' }" :class="['btn', bgName]">
        <i class="fas fa-chevron-left"></i>
        Voltar
      </router-link>
    </div>

    <!-- :src="lesson.video"
    :title="lesson.name" -->

    <!-- src="https://www.youtube.com/embed/KuzeyRr74xM"
      title="YouTube video player" -->

    <iframe
      v-id="lesson.video"
      width="100%"
      height="auto"
      src="https://www.youtube.com/embed/KuzeyRr74xM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div v-if="lesson.description" class="description-lesson">
    {{ lesson.description }}
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: "PlayerVideo",

  setup() {
    const store = useStore()

    const lesson = computed(() => store.state.courses.lessonPlayer)

    return {
      lesson,
    }
  }
};
</script>