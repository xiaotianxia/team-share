export default [
    {
        path: '/audio',
        title: '音频',
        component: () => import('./components/audio/Index')
    },
    {
        path: '/recorder',
        title: '录制',
        component: () => import('./components/recorder/Index')
    },
];