const fetch = require("../libs/fetch.js")

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
      response = await fetch.post("/categories/", create)
      console.log(response)
      if (response.status < 200 || response.status > 299) {
        throw new Error();
      }
      res.status(response.status)
      res.json(await response.json());
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
      response = await fetch.put(`/categories/${id}`, updateCategory)
      console.log(response)
      if (response.status < 200 || response.status > 299) {
        throw new Error();
      }
      res.json(await response.json());
    } catch {
      next({ status: response.status, message: `API Update/Categories/` })
    }
  }

  static async getAll(req, res, next) {
    let response;
    try {
      response = await fetch.get(route);
      if (response.status < 200 || response.status > 299) {
        throw new Error(`API GET/Categories ${response.status}`);
      }
      res.status(response.status)
      res.json(await response.json());
    } catch {
      next({ status: response.status, message: `API GetAll/Categories` })
    }
  }

  static async getId(req, res, next) {
    let response;
    try {
      response = await fetch.get(route + "/" + req.params.id);
      if (response.status < 200 || response.status > 299) {
        throw new Error();
      }
      res.status(response.status)
      res.json(await response.json());
    } catch {
      next({ status: response.status, message: `API GETID/Categories/:id` })
    }
  }

  static async getIdCategoryProduct(req, res, next) {
    let response;
    try {
      response = await fetch.get(route + "/" + req.params.id + "/products")
      if (response.status < 200 || response.status > 299) {
        throw new Error()
      }
      res.status(response.status)
      res.json(await response.json());
    } catch {
      next({ status: response.status, message: `API GETID/Categories/:id/Product` })
    }
  }
}

module.exports = CategoryService