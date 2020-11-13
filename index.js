const = require ('express');
const app = express();

//creates an array of objects
let topMovies = [
    {
        title: 'Harry Potter and the Sorcer\'s Stone',
        author: 'J.K Rowling'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkein'
    },
    {
        title: 'Twilight',
        autho: 'Stephanie Meyer'
    }
];

//GET requests
app.get('/', (req, res) => {
    res.send('Welcome to my book club');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname});
});

app.get('/books', (req, res) => {
    res.json(topMovies);
});

//listen for requests

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});


