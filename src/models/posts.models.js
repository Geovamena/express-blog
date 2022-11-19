const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const Users = require('./users.models')
const Categories = require('./categories.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING, //varchar 
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    //? Llave foranea de Users
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        },
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }
})



module.exports = Posts


