export default defineNuxtPlugin((nuxtApp) => {
    const customFetch = () => {
        const config = useRuntimeConfig();
        const token = useCookie('token').value;

        return $fetch.create({
            baseURL: '',
            onRequest({ options }) {
                if (token) {
                    options.headers = { Authorization: `Bearer ${token}` };
                }
            },
            onResponse({ response }) {
                console.info('onResponse', {
                    endpoint: response.url,
                    status: response.status,
                });
            },
            onResponseError({ response }) {
                const statusMessage = response?.status === 401 ? 'Unauthorized' : 'Response failed';
                console.error('onResponseError', {
                    endpoint: response.url,
                    status: response.status,
                    statusMessage,
                    responseText: response?.statusText,
                    responseBody: response?._data,
                });
                throw new Error(statusMessage);
            },
        });
    };

    nuxtApp.provide('customFetch', customFetch);
});