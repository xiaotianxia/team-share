<template>
    <div>
        <demo1/>
        <div style="height:20px;"></div>
        <demo2/>
    </div>
</template>

<script>
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';

export default {
    components: {
        Demo1,
        Demo2
    }
}
</script>
