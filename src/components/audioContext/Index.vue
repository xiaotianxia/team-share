<template>
    <div>
        <demo1/>
        <div style="height:20px;"></div>
        <demo2/>
        <div style="height:20px;"></div>
        <demo4/>
    </div>
</template>

<script>
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo4 from './components/Demo4';

export default {
    components: {
        Demo1,
        Demo2,
        Demo4
    }
}
</script>
