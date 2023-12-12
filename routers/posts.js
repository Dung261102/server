import express from 'express';
// import { getPosts, createPost, updatePost } from '../controllers/posts.js';
import { getPosts } from '../controllers/posts.js';

const router = express.Router();
//http://localhost:5000/posts

//Test
router.get('/', (req, res) => {
    res.send('router success')
});



router.get('/', getPosts);

// router.post('/', createPost);

// router.post('/update', updatePost);

export default router;
