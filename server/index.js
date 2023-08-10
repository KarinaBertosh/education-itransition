require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};


start();