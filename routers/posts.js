import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
// import { getPosts, createPost, updatePost } from '../controllers/posts.js';




const router = express.Router();
//http://localhost:5000/posts

//Test
// router.get('/', (req, res) => {
//     res.send('router success')
// });


// Route để lấy tất cả bài post

router.get('/', getPosts);


//Khi sử dụng method post, thì controller post sẽ được thực thi
router.post('/', createPost); //rout này sử dụng để lấy tất cả bài post, delete và update

router.post('/update', updatePost);

// Route để xóa bài viết
router.delete('/:id', deletePost);

export default router;
