<template>
    <!-- 设备管理 -->
    <div class="Equipment">
        <p>Equipment</p>
    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .Equipment {
    p {
      font-size: 20px;
      color: red;
    }
  }
}
@media screen and (min-width: 1930px) {
}
</style>
<script>
export default {
    components: {
    },
    name: 'Equipment',
    data() {
        return {
            activeIndex: '1',
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
