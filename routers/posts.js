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

router.put('/update', updatePost);

// Route để xóa bài viết
router.delete('/:id', deletePost);

// router.get('/posts', getPosts);
// router.post('/posts', createPost);
// router.post('/posts/update', updatePost);
// router.delete('/posts/:id', deletePost);

export default router;



/**
 * @swagger
 * 
 * /posts:
 *   get:
 *     summary: Retrieve a list of posts.
 *     description: Retrieve a list of posts from the database.
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The post ID.
 *                     example: "60aebbb7e13a48435c9305e1"
 *                   title:
 *                     type: string
 *                     description: The post title.
 *                     example: "Sample Post Title"
 *                   content:
 *                     type: string
 *                     description: The post content.
 *                     example: "This is a sample post content."
 * 
 *   post:
 *     summary: Create a new post.
 *     description: Create a new post in the database.
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The post title.
 *                 example: "Sample Post Title"
 *               content:
 *                 type: string
 *                 description: The post content.
 *                 example: "This is a sample post content."
 *     responses:
 *       200:
 *         description: The created post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The post ID.
 *                   example: "60aebbb7e13a48435c9305e1"
 *                 title:
 *                   type: string
 *                   description: The post title.
 *                   example: "Sample Post Title"
 *                 content:
 *                   type: string
 *                   description: The post content.
 *                   example: "This is a sample post content."
 * 
 *   put:
 *     summary: Update a post.
 *     description: Update a post in the database.
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: The post ID.
 *                 example: "60aebbb7e13a48435c9305e1"
 *               title:
 *                 type: string
 *                 description: The post title.
 *                 example: "Updated Post Title"
 *               content:
 *                 type: string
 *                 description: The post content.
 *                 example: "Updated post content."
 *     responses:
 *       200:
 *         description: The updated post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The post ID.
 *                   example: "60aebbb7e13a48435c9305e1"
 *                 title:
 *                   type: string
 *                   description: The post title.
 *                   example: "Updated Post Title"
 *                 content:
 *                   type: string
 *                   description: The post content.
 *                   example: "Updated post content."
 * 
 *   delete:
 *     summary: Delete a post.
 *     description: Delete a post from the database.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: The post ID.
 *           example: "60aebbb7e13a48435c9305e1"
 *     responses:
 *       200:
 *         description: The deleted post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message confirming post deletion.
 *                   example: "Post has been successfully deleted."
 *                 deletedPost:
 *                   type: object
 *                   description: The deleted post object.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The post ID.
 *                       example: "60aebbb7e13a48435c9305e1"
 *                     title:
 *                       type: string
 *                       description: The post title.
 *                       example: "Deleted Post Title"
 *                     content:
 *                       type: string
 *                       description: The post content.
 *                       example: "Deleted post content."
 */

