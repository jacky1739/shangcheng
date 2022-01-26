/**
 * 環境配置封裝
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/f081dc64c7a4d12d15842b8e314414aa/api'
    },
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/f081dc64c7a4d12d15842b8e314414aa/api'
    },
    prod: {
        baseApi: '//futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/f081dc64c7a4d12d15842b8e314414aa/api'
    }
}

export default {
    env,
    mock: true,
    ...EnvConfig[env]
}
