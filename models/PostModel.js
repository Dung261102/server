//postmodel giúp lưu trữ các bài posts của người dùng

import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
            default: 'Anonymous',
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    // Tự động thêm thời gian hiện tại
    { timestamps: true }

);

export const PostModel = mongoose.model('Post', schema);
