const Posts = require('../models/posts.models')

const uuid = require('uuid')

const getAllPosts = async() => {
    const data = await Posts.findAll()
    return data
}

const getPostById = async(id) => {

}

const createPost = async (data) => {
    const response = await Posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        createdBy: data.userId, //? este es el user id que viene desde el token
        categoryId: data.categoryId
    })
    return response
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost
}

