import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './src/routes/task.route';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
dotenv.config();

const app = express();
app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'REST API Docs of Task',
			version: '1.0.0',
			description:
				'This is a simple Task API application made with Express and documented with Swagger',
			license: {
				name: 'MIT',
				url: 'https://spdx.org/licenses/MIT.html',
			},
			contact: {
				name: 'Axel',
				url: 'axel.com',
				email: 'axel@email.com',
			},
		},
		servers: [
			{
				url: `http://${process.env.HOST}:${process.env.PORT}`,
			},
		],
	},
	apis: ['./src/routes/*.ts'],
};

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(process.env.PORT, () => {
	console.log(
		`Server is running on http://${process.env.HOST}:${process.env.PORT}`
	);
});
