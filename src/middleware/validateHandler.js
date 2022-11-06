// La informacion de un req puede venir en varios lugares
// post: req.body
// get: req.params
// get: req.query

// Middleware de forma dinamica
function validateHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property]
        const { error } = schema.validate(data)
        try {
            if (error) {
                console.log(error)
                throw new Error("Error de validacion")
            }
        } catch {
            next({ status: '', message: error.message, description: error._original })
        }
        next()
    }
}

module.exports = validateHandler