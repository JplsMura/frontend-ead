<template>
  <div class="training">
    <div class="card bg-laravel">
      <span class="icon">
        <img src="images/icons/laravel.svg" alt="" />
      </span>
      <span class="title">{{ lesson.name }}</span>
      <router-link :to="{ name: 'campus.home' }" class="btn laravel">
        <i class="fas fa-chevron-left"></i>
        Voltar
      </router-link>
    </div>

    <!-- :src="lesson.video"
    :title="lesson.name" -->

    <!-- src="https://www.youtube.com/embed/KuzeyRr74xM"
      title="YouTube video player" -->

      <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/TfsO0BGvGn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
      <!-- v-if="lesson.video" -->
    <iframe

      width="100%"
      height="auto"
      src="https://www.youtube.com/embed/TfsO0BGvGn0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div class="description-lesson" v-if="lesson.description">
    {{ lesson.description }}
  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "PlayerVideo",
  setup() {
    const store = useStore();

    const lesson = computed(() => store.state.courses.lessonPlayer);

    watch(
      () => store.state.courses.lessonPlayer,
      () => {
        if (lesson.value.id != "")
          setTimeout(() => store.dispatch("markLessonViewed"), 3000);
      }
    );

    return {
      lesson,
    };
  },
};
</script>