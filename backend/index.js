const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./app/users');
const locations = require('./app/locations');
const reviews = require('./app/reviews');
const pictures = require('./app/pictures');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
	await mongoose.connect(config.database, config.databaseOptions);

	app.use('/users', users);
	app.use('/locations', locations);
	app.use('/reviews', reviews);
	app.use('/pictures', pictures);

	app.listen(config.port, () => {
		console.log(`HTTP server started on ${config.port} port...`);
	})
};

run().catch(e => {
	console.error(e)
});