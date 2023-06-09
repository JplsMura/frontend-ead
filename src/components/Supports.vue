<template>
  <div class="content">
    <div class="card" v-for="support in supports.data" :key="support.id">
      <!-- Dúvidas do autor do suporte -->
      <div class="commentContent main">
        <ImageComponentVue
          :imageUser="support.user.image"
          :nameUser="support.user.name"
        />

        <CommentComponentVue
          :nameUser="support.user.name"
          :dtUpdate="support.date"
          :descriptionSupport="support.description"
        />

        <button class="btn primary">Ocultar respostas</button>
      </div>

      <!-- Dúvidas respondidas ao suporte, seja por outros alunos ou pelo professor -->
      <div class="answersContent">
        <div
          v-for="reply in support.replies"
          :key="reply.id"
          :class="[
            'commentContent',
            { rightContent: support.user.id != reply.user.id },
          ]"
        >
          <span class="avatar" v-if="support.user.id === reply.user.id">
            <ImageComponentVue
              :imageUser="reply.user.image"
              :nameUser="reply.user.name"
            />
          </span>

          <CommentComponentVue
            :nameUser="support.user.name"
            :dtUpdate="support.date"
            :descriptionSupport="support.description"
          />

          <span class="avatar" v-if="support.user.id != reply.user.id">
            <ImageComponentVue
              :imageUser="reply.user.image"
              :nameUser="reply.user.name"
            />
          </span>
        </div>

        <span class="answer">
          <button class="btn primary">Responder</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import ImageComponentVue from "./supportComponents/ImageComponent.vue";
import CommentComponentVue from "./supportComponents/CommentComponent.vue";

export default {
  name: "SupportsGlobal",

  components: {
    ImageComponentVue,
    CommentComponentVue,
  },

  setup() {
    const store = useStore();

    const supports = computed(() => store.state.supports.supports);

    return {
      supports,
    };
  },
};
</script>