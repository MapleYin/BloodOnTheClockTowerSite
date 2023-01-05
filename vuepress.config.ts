import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Story Teller Tool',
            description: 'A story teller tools',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '说书人工具',
            description: '说书人工具',
        }
    },
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: "English"
            },
            "/zh/": {
                selectLanguageName: "简体中文"
            }
        }
    })
})