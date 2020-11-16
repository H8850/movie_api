const express = require ('express');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');

const app = express();

//creates an array of objects
let topMovies = [
    {
        title: 'Die Hard',
        director: 'John Mctiernan'
    },
    {
        title: 'Star Wars',
        director: 'George Lucas'
    },
    {
        title: 'Spirited Away',
        director: 'Hayao Miyazaki'
    },
    {
        title: 'example',
        director: 'example'
    },
    {
        title: 'example',
        director: 'example'
    },
    {
        title: 'example',
        director: 'example'
    },
    {
        title: 'example',
        director: 'example'
    },
    {
        title: 'example',
        director: 'example'
    },
    {
        title: 'example',
        director: 'example'
    },
    {
        title: 'example',
        director: 'example'
    }
];

app.use(morgan('common'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(methodOverride());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//GET requests
app.get('/', (req, res) => {
    res.send('Welcome to my list of top movies!');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname});
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

//listen for requests

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});


