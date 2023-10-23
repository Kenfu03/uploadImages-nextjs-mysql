import mysql from 'serverless-mysql';

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: '1234',
        port: 3306,
        database: 'upload_img_nextjs'
    }
})