const CategoryService = require("../services/categoryService.js")

// https://api.escuelajs.co/api/v1/categories
async function getAll(req, res, next) {
  return await CategoryService.getAll(req, res, next)
}

// https://api.escuelajs.co/api/v1/categories/1
async function getId(req, res, next) {
  return await CategoryService.getId(req, res, next)
}

async function getIdCategoryProduct(req, res, next) {
  return await CategoryService.getCategoryIdProduct(req, res, next)
}

// https://api.escuelajs.co/api/v1/categories
async function create(req, res, next) {
  return await CategoryService.create(req, res, next)
}

// https://api.escuelajs.co/api/v1/categories/1
async function update(req, res, next) {
  return await CategoryService.update(req, res, next)
}

module.exports = {
  create,
  update,
  getId,
  getAll,
  getIdCategoryProduct,
}
