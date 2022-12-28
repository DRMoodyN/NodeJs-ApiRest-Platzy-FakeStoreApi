const fakePlatzyFetch = require("../api/fakePlatzyFetch.js")
const fakePlatzyAxios = require("../api/fakePlatzyAxios.js")

const route = "/categories"

class CategoryService {

  static async create(req, res, next) {
    let response;
    const { name, image } = req.body

    const create = {
      name: name,
      image: image
    }

    try {
      // response = await fakePlatzyFetch.post("/categories/", create)
      response = await fakePlatzyAxios.post(route, create);
      if (response.status < 200 || response.status > 299) {
        throw new Error();
      }
      res.status(response.status)
      // res.json(await response.json());
      res.json(response.data);

    } catch {
      next({ status: response.status, message: `API Create/Categories/` })
    }
  }

  static async update(req, res, next) {
    let response;
    const { name, image } = req.body
    const id = req.params.id

    const updateCategory = {
      name: name,
      image: image
    }

    try {
      // response = await fetch.put(`/categories/${id}`, updateCategory)
      response = await fakePlatzyAxios.put(route + `/${id}`, updateCategory)
      if (response.status < 200 || response.status > 299) {
        throw new Error();
      }

      res.status(response.status);
      res.json(response.data);
      // res.json(await response.json());
    } catch {
      next({ status: response.status, message: `API Update/Categories/` })
    }
  }

  static async getAll(req, res, next) {
    let response;
    try {
      // response = await fetch.get(route);
      response = await fakePlatzyAxios.getAll(route)
      if (response.status < 200 || response.status > 299) {
        throw new Error(`API GET/Categories ${response.status}`);
      }
      res.status(response.status)
      // res.json(await response.json());
      res.json(response.data);
    } catch {
      next({ status: response.status, message: `API GetAll/Categories` })
    }
  }

  static async getId(req, res, next) {
    let response;
    try {
      // response = await fetch.get(route + "/" + req.params.id);
      response = await fakePlatzyAxios.getAll(route + "/" + req.params.id);
      if (response.status < 200 || response.status > 299) {
        throw new Error();
      }
      res.status(response.status)
      // res.json(await response.json());
      res.json(response.data);
    } catch {
      next({ status: response.status, message: `API GETID/Categories/:id` })
    }
  }

  static async getCategoryIdProduct(req, res, next) {
    let response;
    let { offset = 1, limit = 12 } = req.query;
    try {
      // response = await fetch.get(route + "/" + req.params.id + "/products")
      response = await fakePlatzyAxios.getAll(route + "/" + req.params.id + "/products?" + `limit=${limit}&offset=${offset}`);

      if (response.status < 200 || response.status > 299) {
        throw new Error()
      }
      res.status(response.status)
      // res.json(await response.json());
      res.json(response.data);
    } catch {
      next({ status: response.status, message: `API GETID/Categories/:id/Product` })
    }
  }
}

module.exports = CategoryService