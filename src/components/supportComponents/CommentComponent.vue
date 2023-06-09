<template>
  <div class="comment">
    <div class="balloon">
      <span class="fas fa-sort-down"></span>
      <span class="owner">
        {{ nameUser }} - {{ dtUpdate }}
      </span>
      <span class="text">
        {{ descriptionSupport }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentComponent",

  props: {
    nameUser: String,
    dtUpdate: Date,
    descriptionSupport: String,
  },
  
};
</script>