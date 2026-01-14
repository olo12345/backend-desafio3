import {getAllPostsModel, addPostModel} from "../model/posts.model.js";

//GET
const getAllPosts = async (req, res) => {
try {
    const posts = await getAllPostsModel();
    res.status(200).json(posts.rows);
}
catch (error) {
    res.status(500).json({error: error.message});
}
}

//POST
const addPost = async (req, res) => {
    try {
        const {titulo, url, descripcion} = req.body;
        const newPost = await addPostModel(titulo, url, descripcion);
        res.status(201).json({ post: newPost });
    }
    catch (error) {
        res.status(500).json({error: "hubo un error"});
    }
}

export {getAllPosts, addPost};