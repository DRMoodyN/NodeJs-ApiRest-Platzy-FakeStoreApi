const fetch = require("node-fetch");
const env = 'https://api.escuelajs.co/api/v1'

async function get(route) {
    return await fetch(env + route)
}

async function post(route, create) {
    let response = await fetch(env.URL + route, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(create)
    })
    return response;
}

async function put(route, updateCategory) {
    let response = await fetch(env.URL + route, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateCategory)
    })
    return response;
}

async function deletefisic(route) {
    let response = await fetch(env.URL + route, {
        method: 'DELETE'
    })
    return response;
}

module.exports = {
    get,
    post,
    put,
    deletefisic
}