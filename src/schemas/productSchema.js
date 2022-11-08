const joi = require('joi')

const id = joi.number().integer()
const title = joi.string().min(5).max(50)
const price = joi.number().positive()
const description = joi.string().min(5).max(50)
const categoryId = joi.number().integer()
const images = joi.array().items(joi.string().uri())

const Id = joi.object({
    id: id.required()
})

const Create = joi.object({
    title: title.required(),
    price: price.required(),
    description: description.required(),
    categoryId: categoryId.required(),
    images: images.required()
})


module.exports = {
    Id,
    Create
}