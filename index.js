import express from 'express';

//các midlleware (bodyParser và cors)
// import bodyParser, { urlencoded } from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

//để sử dụng được các biến môi trường
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const pathUrl = process.env.Blog_URL || `http://localhost:${port}`;
// const routesDir = new URL('./routes/', import.meta.url).pathname; // Xác định đường dẫn tới thư mục 'routes'

// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUI = require("swagger-ui-express");

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";




// Lưu đường dẫn kết nối với mongodb
// const URI =
//     'mongodb+srv://admin:hhZ9ayA8MAuwfzFw@cluster0.itgurbh.mongodb.net/?retryWrites=true&w=majority';


//Thay thế đường dẫn ở trên
const URI = process.env.DATABASE_URL;


//để có thể sử dụng được các midlleware
// app.use(bodyParser.json({ limit: '30mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));


//test
// const cors = require('cors')
// const corsOption = {
//     origin: ['http://localhost:3000'],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }
// app.use(cors(corsOption))
//hết phần test

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

//Ví dụ test thử midlleware
// app.get('/', (req, res) => {
//     res.send('success');
// });

//localhost:5000/

//Nếu viết tất cả các rout trong file này thì đoạn code sẽ rất khó nhìn và khó maintance => sử dụng 1 middleware khác của express là router để phân chia.

//Để có thể sử dụng router post
app.use('/posts', posts);
//localhost:5000/posts



// Swagger options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
        servers: [
            {
                url: pathUrl,
            },
        ],
    },
    // Specify the pathUrl to your route files with Swagger annotations
    // apis: [`${__dirname}/routes/*.js`],

    // apis: [`${routesDir}/*.js`],

    apis: ['./routers/*.js'],
};
const specs = swaggerJsDoc(options);

app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

mongoose.connect(URI)
    // { useNewUrlParser: true, useUnifiedTopology: true }): Không cần vì nó luôn đúng với phiên bản mới hơn
    .then(() => {
        console.log('Connected to DB');

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });
