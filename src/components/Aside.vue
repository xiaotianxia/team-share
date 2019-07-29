<template>
    <div class="aside" :class="{open: open}">
        <div class="aside-button" @click="onOpen">
            <i :class="open ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        </div>
        <div class="aside-menus">
            <ul>
                <router-link v-for="menu in menus" :key="menu.path" :to="menu.path" tag="li">{{menu.title}}</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import menus from '../routesMap';

export default {
    data () {
        return {
            open: false,
            menus
        }
    },

    methods: {
        onOpen () {
            this.open = !this.open;
            this.$emit('open', {
                open: this.open
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .aside {
        position: fixed;
        width: 15em;
        height: 100%;
        box-shadow: 2px 0 6px rgba(0, 0, 0, .5);
        transform: translateX(-13em);
        transition: all ease-in-out .2s;
        z-index: 2000;

        &.open {
            transform: translateX(0);
        }

        .aside-button {
            position: absolute;
            right: 0;
            font-size: 22px;
            cursor: pointer;

            i {
                color: rgba(0, 0, 0, .5);
            }
        }
        .aside-menus {
            padding: 10px 0;

            li {
                padding: 0 10px;
                height: 32px;
                line-height: 32px;
                border-left: 4px solid transparent;
                cursor: pointer;

                &:hover {
                    color: #3eaf7c;
                    background-color: #f9f9f9;
                }
            }
            .router-link-active {
                font-weight: 600;
                color: #3eaf7c;
                border-left-color: #3eaf7c;
            }
        }
    }
</style>

