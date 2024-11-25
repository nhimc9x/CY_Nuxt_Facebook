const testGetPost = () => {
    return apiMethods().GET('https://jsonplaceholder.typicode.com/todos/1')
}

export default {
    testGetPost,
}