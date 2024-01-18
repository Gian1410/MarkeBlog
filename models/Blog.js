import Sequelize from "sequelize";
import db from '../config/db.js';

export const Blog = db.define('blogsections',{
    
    nombre:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    content:{
        type: Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    },
})