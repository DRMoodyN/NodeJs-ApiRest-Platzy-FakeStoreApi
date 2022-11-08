const fetch = require("../libs/fetch.js")
const route = "/products"

class ProductService {

    static async getAll(req, res, next) {
        let response
        let { offset = 0, limit = 10 } = req.query;
        try {
            response = await fetch.get(route + `?offset=${offset}&limit=${limit}`)
            if (response.status < 200 || response.status > 299) {
                throw new Error();
            }
            res.status(response.status)
            res.json(await response.json());
        } catch {
            next({ status: response.status, message: `API GetAll${route}/` })
        }
    }

    static async create(req, res, next) {
        let response;
        const create = getCreate(req)

        try {
            response = await fetch.post(`${route}/`, create)
            console.log(response)
            if (response.status < 200 || response.status > 299) {
                throw new Error();
            }
            res.status(response.status)
            res.json(await response.json());
        } catch {
            next({ status: response.status, message: `API Create${route}/` })
        }
    }

    static async update(req, res, next) {
        let response;
        const create = getCreate(req)
        const id = req.params.id
        try {
            response = await fetch.put(`${route}/${id}`, create)
            console.log(response)
            if (response.status < 200 || response.status > 299) {
                throw new Error();
            }
            res.status(response.status)
            res.json(await response.json());
        } catch {
            next({ status: response.status, message: `API Update${route}/` })
        }
    }

    static async getId(req, res, next) {
        let response;
        const id = req.params.id
        try {
            response = await fetch.get(route + "/" + id);
            if (response.status < 200 || response.status > 299) {
                throw new Error();
            }
            res.status(response.status)
            res.json(await response.json());
        } catch {
            next({ status: response.status, message: `API GetId${route}/` })
        }
    }

    static async deleteId(req, res, next) {
        let response;
        const id = req.params.id
        try {
            response = await fetch.deletefisic(route + "/" + id);
            if (response.status < 200 || response.status > 299) {
                throw new Error();
            }
            res.status(response.status)
            res.json(await response.json());
        } catch {
            next({ status: response.status, message: `API Delete${route}/` })
        }
    }
}

function getCreate(req) {
    const { title, price, description, categoryId, images } = req.body
    const create = {
        title: title,
        price: price,
        description: description,
        categoryId: categoryId,
        images: images
    }
    return create
}

module.exports = ProductService