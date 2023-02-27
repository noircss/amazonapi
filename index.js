const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;


//const apiKey = 'c4293636af32e79b15c1cbea8f63b773';

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.');
});

// GET Product Details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

        res.json(JSON.parse(response));
    } catch (error){
        res.json(error);
    }
});

// GET Product reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);

        res.json(JSON.parse(response));
    } catch (error){
        res.json(error);
    }
});

// GET Product offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);

        res.json(JSON.parse(response));
    } catch (error){
        res.json(error);
    }
});

// GET search results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);

        res.json(JSON.parse(response));
    } catch (error){
        res.json(error);
    }
});




app.listen(PORT, () => console.log(`server running on port ${PORT}`));