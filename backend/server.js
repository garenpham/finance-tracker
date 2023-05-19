const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');

const app = express();

require('dotenv-flow').config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	}),
);

//routes
readdirSync('./routes').map((route) =>
	app.use('/api/v1', require('./routes/' + route)),
);

const server = () => {
	db();
	app.listen(PORT, () => {
		console.log('Server is running on port:', PORT);
	});
};

server();
