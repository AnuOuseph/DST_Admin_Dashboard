const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const adminRouter = require('./routes/adminRoutes');
const userRoute = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
  );
  app.use(bodyParser.json());

app.use(cors());

app.use('/api/admin', adminRouter);
app.use("/", userRoute);


const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server running at ${PORT}`));


