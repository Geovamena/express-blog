const Users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {
    //* 1 -> M
    //? Una Publicacion, pertenece a un Usuario
    Posts.belongsTo(Users)
    //? Un usuario tiene muchas Publicaciones
    Users.hasMany(Posts)

    //* 1 -> M
    //? Una Publicación, pertenece a una Categoria
    Posts.belongsTo(Categories)
    //? Una Categoria, tiene muchas Publicaciones
    Categories.hasMany(Posts)
}


module.exports = initModels