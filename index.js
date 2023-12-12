import express from 'express';

//các midlleware (bodyParser và cors)
// import bodyParser, { urlencoded } from 'body-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

import posts from './routers/posts.js';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// const URI = process.env.DATABASE_URL;


//để có thể sử dụng được các midlleware
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
// app.use(express.json({ limit: '30mb' }));
// app.use(express.urlencoded({ extended: true, limit: '30mb' }));

//Ví dụ test thử midlleware
// app.get('/', (req, res) => {
//     res.send('success');
// });

//localhost:5000/

//Nếu viết tất cả các rout trong file này thì đoạn code sẽ rất khó nhìn và khó maintance => sử dụng 1 middleware khác của express là router để phân chia.

//Để có thể sử dụng router post
app.use('/posts', posts);
//localhost:5000/posts


// mongoose
//   .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to DB');
http: app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//   })
//   .catch((err) => {
//     console.log('err', err);
//   });
