<template>
  <img
    :src="[
      imageUser ? imageUser : require('@/assets/images/avatars/user01.svg'),
    ]"
    :alt="[nameUser ? nameUser : '']"
  />
</template>

<script>
export default {
  name: "ImageComponent",

  props: {
    imageUser: String,
    nameUser: String,
  },
};
</script>