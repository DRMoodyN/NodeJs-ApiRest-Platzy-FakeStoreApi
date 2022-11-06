const joi = require('joi')

const id = joi.number().integer()
const name = joi.string().min(5).max(50)
const image = joi.string().uri()

const Id = joi.object({
    id: id.required()
})

const Create = joi.object({
    name: name.required(),
    image: image.required()
})

module.exports = {
    Id,
    Create
}



