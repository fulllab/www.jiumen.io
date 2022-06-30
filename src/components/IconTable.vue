<template>
  <div class="icon-table">
    <i v-if="evaluate == 1" class="iconfont support icon-done"></i>
    <i v-if="evaluate == 0" class="iconfont incomplete icon-hulve"></i>
    <i v-if="evaluate == -1" class="iconfont incorrect icon-cuowukongxin"></i>
  </div>
</template>

<script>
export default {
  props: ["evaluate"],
  data() {
    return {};
  },
  created: async function () {
  },
};
</script>

<style lang="scss">
.icon-table {
  width: 100% !important;
  height: 100% !important;

  .support {
    color: rgb(2, 190, 2);
  }

  .incorrect {
    color: rgb(248, 14, 45);
  }
}
</style>
