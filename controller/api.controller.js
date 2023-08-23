const db = require('../data/productos.json')

module.exports = {
    products: async (req, res) => {
        try {
            const product = await db
            return res.status(200).json(product)
        } catch (error) {
            console.log(error);
        }
    }
}