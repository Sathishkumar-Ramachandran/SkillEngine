import Express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './src/config/dbConnection';



dotenv.config();
const app = Express();
const PORT = process.env.PORT || 10001;

//v1 ROUTES




// SERVER



// MIDDLEWARES
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(cors());
app.use(morgan('dev'));

connectDB()
    .then((client) => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });

