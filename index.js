const express = require ('express');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');

const app = express();

//creates an array of users

let users = [
    {
        userName: 'John Doe',
        userPassword: ,
        userEmail: ,
        userBirthdate:

    },
]


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

//requests

//gets the index
app.get('/', (req, res) => {
    res.send('Welcome to my list of top movies!');
});

// gets documentation
app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname});
});

// gets list of ALL movies
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

// gets a data about a single movie by title
app.get('/movies/:title', (req, res) => {
    res.json(topMovies.find((movie) =>
    { return movie.title === req.params.title}));
});

// gets data of movies by a genre

// gets data about a director by name

// posts a new user to the server
app.post('/users', (req, res) => {
    let newUser = req.body;

    if (!newUser.name) {
        const message = 'Missing name in request body';
        res.status(400).send(message);
    } else {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).send(newUser);
    }
});

// puts an update of user info
app.put('/users/:name/:favouriteMovies', (req, res) => {
    let user = users.find((user) => { return user.name
    === req.params.name});

    if(user) {
        student.cla
    }
})

// puts a movie in the users list of favourites

// deletes a movie from the users list of favourites

// delets a user profile from the server

//listen for requests

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});


