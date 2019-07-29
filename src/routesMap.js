export default [
    {
        path: '/speech-synthesis',
        title: '语音合成',
        component: () => import('./components/speech-synthesis/Index')
    },
    {
        path: '/recorder',
        title: '录制',
        component: () => import('./components/recorder/Index')
    },
];