
import { Blog } from '../models/Blog.js';

const paginaInicio = async(req,res)=>{
    
    const promiseDB = [];

    promiseDB.push(Blog.findAll({limit:3}))
    
    try {
        const resultado = await Promise.all(promiseDB);
        const [blogsections] = resultado;

        console.log(blogsections);
        res.render('inicio',{
            pagina: 'Inicio',
            blogsections
        })

    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req,res)=>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    })
}

const paginaContacto = (req,res) =>{
    res.render('contacto',{
        pagina: 'contacto'
    })
}

const paginaPost = async(req,res) =>{

    const posts = await Blog.findAll();

    res.render('posts',{
        pagina: 'posts',
        posts,
    })
}

const paginaDetallePost = async(req,res)=>{
    const {slug} = req.params;
    try {
        const post = await Blog.findOne({where:{slug:slug}});
        res.render('post',{
            pagina: 'Blog Post',
            post,
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaPost,
    paginaDetallePost
}