<template>
    <div class="speech-wrapper" element-loading-text="加载语言包..." v-loading="!voiceData.length">
        <el-form v-model="queryParams" label-width="90px" label-position="left">
            <el-form-item label="文字:">
                <el-input v-model="queryParams.text" type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="想听啥？"></el-input>
            </el-form-item>

            <el-form-item label="语言:">
                <el-select v-model="queryParams.lang" @change="onChange">
                    <el-option v-for="item in voiceData" :key="item.voiceURI" :value="item.lang" :label="item.name"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="声音:">
                <span>{{queryParams.voiceURI}}</span>
            </el-form-item>

            <el-form-item label="音量:">
                <el-slider v-model="queryParams.volume" :min="0" :max="1" :step="0.1" show-input></el-slider>
            </el-form-item>

            <el-form-item label="语速:">
                <el-slider v-model="queryParams.rate" :min="0" :max="10" :step="1" show-input></el-slider>
            </el-form-item>

            <el-form-item label="音调:">
                <el-slider v-model="queryParams.pitch" :min="0" :max="2" :step="0.2" show-input></el-slider>
            </el-form-item>

            <el-form-item>
                <el-button :diabled="!!voiceData.length" type="primary" @click="onSpeak">朗读</el-button>
                <el-button v-show="!voiceData.length" @click="onFresh">未获取到语言包，点击刷新</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            voiceData: [],
            queryParams: {
                voiceURI: 'Ting-Ting',
                lang: 'zh-CN',
                volume: 1,
                pitch: 1,
                rate: 1,
                text: '大家好，这里是阿里巴巴，创新业务事业群，智能营销平台。'
            },

            speechInstance: null,
        }
    },

    methods: {
        onChange (e) {
            let chosenItem = this.voiceData.filter(item => {
                return e == item.lang;
            });
            this.queryParams.voiceURI = chosenItem[0].voiceURI;
        },

        onFresh () {
            this.speechInstance = new SpeechSynthesisUtterance();
            Object.keys(this.queryParams).forEach(key => {
                this.speechInstance[key] = this.queryParams[key];
            })

            speechSynthesis.speak(this.speechInstance);
        },

        onSpeak () {
            this.onFresh();
        }
    },

    mounted () {
        let timer = setInterval(() => {
            if(!this.voiceData.length) {
                //获取语言包
                this.voiceData = speechSynthesis.getVoices();
            } else {
                clearInterval(timer);
            }
        }, 500);
    }
}
</script>

<style>
    .speech-wrapper {
        padding-top: 10px;
    }
</style>