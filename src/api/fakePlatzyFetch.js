const fetch = require("node-fetch");
require("dotenv").config({ path: './.env' });

const API_URL = process.env.API_FAKE_PLATZY;

async function get(route) {
    return await fetch(API_URL + route)
}

async function post(route, create) {
    let response = await fetch(API_URL + route, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(create)
    })
    return response;
}

async function put(route, updateCategory) {
    let response = await fetch(API_URL + route, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateCategory)
    })
    return response;
}

async function deletefisic(route) {
    let response = await fetch(API_URL + route, {
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