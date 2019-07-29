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
            open: false
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
        max-width: 740px;
        margin-left: calc(50% - 370px - 1em);
        padding: 3em;
        transition: all ease-in-out .2s;

        &.open {
           margin-left: 15em; 
        }
    }
</style>