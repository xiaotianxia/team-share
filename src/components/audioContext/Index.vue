<template>
    <div>
        <demo1 v-if="n == 1"/>
        <div style="height:20px;"></div>
        <demo2 v-if="n == 2"/>
        <div style="height:20px;"></div>
        <demo4 v-if="n == 4"/>
        <div style="height:20px;"></div>
        <demo6 v-if="n == 6"/>
    </div>
</template>

<script>
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo4 from './components/Demo4';
import Demo6 from './components/Demo6';

export default {
    data () {
        return {
            n: this.$route.query.n
        }
    },

    components: {
        Demo1,
        Demo2,
        Demo4,
        Demo6
    }
}
</script>
