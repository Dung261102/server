import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';


const router = express.Router();
//http://localhost:5000/posts

//Test
// router.get('/', (req, res) => {
//     res.send('router success')
// });



router.get('/', getPosts);


//Khi sử dụng method post, thì controller post sẽ được thực thi
router.post('/', createPost); //rout này sử dụng để lấy tất cả bài post, delete và update

router.post('/update', updatePost);

export default router;
