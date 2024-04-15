const express = require('express');

const dotenv = require('dotenv');

const cookieParser = require('cookie-parser');

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});