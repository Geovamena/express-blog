const postControllers = require('./posts.controller')

const getAllPosts = (req, res) => {

    //? localhost:9000/api/v1/posts?offset=0&limit=20
    const { offset, limit } = req.query
    //? offset: donde inicia
    //? limit: cantidad maxima de entidades a mostrar por pagina

    postControllers.getAllPosts(offset, limit)
        .then(data => {
            res.status(200).json({
                offset,
                limit,
                results: data
            })
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const createPost = (req, res) => {
    //? Este es el id del usuario loggeado
    const userId = req.user.id 
    const { title, content, categoryId } = req.body
    if(title && content && categoryId){
        postControllers.createPost({title, content, userId, categoryId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                content: 'string',
                categoryId: 'uuid'
            }
        })
    }

}

const getPostsByCategory = (req, res) => {
    const categoryId = req.params.id 
    postControllers.getPostsByCategory(categoryId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}




module.exports = {
    createPost,
    getAllPosts,
    getPostsByCategory
}