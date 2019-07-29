<template>
    <div id="app">
        <my-aside @open="open = $event.open"></my-aside>

        <div class="main" :class="{open: open}">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>

<script>
import MyAside from './components/Aside';

export default {
    data () {
        return {
            open: true
        }
    },

    components: {
        MyAside
    }
}
</script>

<style lang="less">
    #app {
        height: 100%;
    }

    .main {
        height: 100%;
        margin-left: 2em;
        padding: 3em;
        transition: all ease-in-out .2s;

        &.open {
           margin-left: 20em; 
        }
    }
</style>