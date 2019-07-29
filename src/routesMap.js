export default [
    {
        path: '/speech-synthesis',
        title: '语音合成',
        component: () => import('./components/speech-synthesis/Index')
    },
    {
        path: '/speech-recognition',
        title: '语音识别',
        component: () => import('./components/speech-recognition/Index')
    }, 
    {
        path: '/recorder',
        title: '音视频录制',
        component: () => import('./components/recorder/Index')
    },
    {
        path: '/audioContext',
        title: '音频',
        component: () => import('./components/audioContext/Index')
    }
];