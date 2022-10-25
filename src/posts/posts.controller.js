const Posts = require('../models/posts.models')

const uuid = require('uuid')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')

const getAllPosts = async(offset, limit) => {
    const data = await Posts.findAll({
        offset: offset,
        limit: limit,
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email']
            },
            {

                model: Categories
            }
        ]
    })
    return data
}

const getPostById = async(id) => {
    const data = await Posts.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
         },
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email']
            },
            {
                model: Categories,
                as: 'category'
            }
        ]
    })
    return data
}

const createPost = async (data) => {
    const response = await Posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        userId: data.userId, //? este es el user id que viene desde el token
        categoryId: data.categoryId
    })
    return response
}

const getPostsByCategory = async (categoryId) => {
    const data = await Posts.findAll({
        where: {
            categoryId
        }
    })
    return data
}



module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    getPostsByCategory
}

