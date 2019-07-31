export default [
    {
        path: '*',
        component: () => import('./components/Index')
    },
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
    },
    {
        path: '/connection',
        title: '网络连接',
        component: () => import('./components/connection/Index')
    }, 
    {
        path: '/fullscreen',
        title: '全屏',
        component: () => import('./components/fullscreen/Index')
    },
    {
        path: '/notification',
        title: '桌面通知',
        component: () => import('./components/notification/Index')
    }
];