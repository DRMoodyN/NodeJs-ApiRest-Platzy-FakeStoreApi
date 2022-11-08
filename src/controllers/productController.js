const ProductService = require('../services/productServices')

async function getAll(req, res, next) {
    return await ProductService.getAll(req, res, next)
}

async function create(req, res, next) {
    return await ProductService.create(req, res, next)
}

async function update(req, res, next) {
    return await ProductService.update(req, res, next)
}

async function getId(req, res, next) {
    return await ProductService.getId(req, res, next)
}

async function deleteId(req, res, next) {
    return await ProductService.deleteId(req, res, next)
}

module.exports = {
    getAll,
    create,
    getId,
    update,
    deleteId
}