export default function () {

    const customFetch = useNuxtApp().$customFetch();

    const GET = (endpoint, params = {}) => {
        return customFetch(endpoint, {method: 'GET', params});
    }

    const POST = (endpoint, data) => {
        return customFetch(endpoint, {method: 'POST', body: data});
    }

    const DELETE = (endpoint, data) => {
        return customFetch(endpoint, {method: 'DELETE', body: data});
    }

    const PUT = (endpoint, data) => {
        return customFetch(endpoint, {method: 'PUT', body: data});
    }

    return {
        GET,
        POST,
        DELETE,
        PUT,
    }
}
