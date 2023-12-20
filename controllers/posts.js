import { PostModel } from '../models/PostModel.js';


//Test
// export const getPosts = (req, res) => {
//     res.send('router success')
// };

//Thực thi router.get('/', getPosts)
export const getPosts = async (req, res) => {
    try {

        // Test thử thêm dữ liệu
        // const post = new PostModel({
        //     title: 'test',
        //     content: 'test',
        // });

        // post.save();

        const posts = await PostModel.find(); //mặc định khi gọi find thì sẽ return ra tất cả post có trong database
        // console.log('posts', posts); chạy thử
        // status thành công: 200 và 1 json dữ liệu của tất cả bài viết
        res.status(200).json(posts);

    } catch (err) {
        // T/h có lỗi khi lấy từ DB, trả về cho client 1 status và 1 json err
        res.status(500).json({ error: err });
    }
};


// Thực thi router.post('/', createPost)

//test
// export const createPost = (req, res) => {
//     res.send('create success')
// };


//Tạo mới 1 post
export const createPost = async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(newPost);
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};


//cập nhật dữ liệu cho bài viết
export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = await PostModel.findOneAndUpdate(
            { _id: updatePost._id },
            updatePost,
            { new: true }
        );

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};


// Xóa bài post
export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id; // Lấy ID của bài viết từ request params

        const deletedPost = await PostModel.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({ error: 'Bài viết không tồn tại' });
        }

        res.status(200).json({ message: 'Bài viết đã được xóa thành công', deletedPost });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
