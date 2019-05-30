<template>
    <div id="app">
        <div class="app">
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            abstract: [],
        }
    },
    created() {

    },
    watch: {

    },
    mounted() {
    },
    methods: {

    }
}
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
