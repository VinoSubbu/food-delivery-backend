import express from 'express';
import cors from 'cors';
import foodRouter from './routes/foodRoute.js';
import userRoute from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import 'dotenv/config';

// App configuration
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/user', userRoute);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);

app.get('/', (req, res) => {
    res.send("API WORKING");
});

// Server listening
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
