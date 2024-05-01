import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './src/routes/task.route';
dotenv.config();

const app = express();
app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(process.env.PORT, () => {
	console.log(
		`Server is running on http://${process.env.HOST}:${process.env.PORT}`
	);
});
