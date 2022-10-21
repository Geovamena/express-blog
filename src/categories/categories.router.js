const router = require('express').Router()

const categoryServices = require('./categories.services')
const { getPostsByCategory } = require('../posts/posts.services')

router.route('/') //? /api/v1/categories
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory)
//? /api/v1/categories/:id
router.get('/:id', categoryServices.getCategoryById)

router.get('/:id/posts', getPostsByCategory)


module.exports = router


