'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var books = [{
    id: 1,
    title: "The Ultimate Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    imageName: "TheUltimateHitchhikersGuide.jpg"
}, {
    id: 2,
    title: "2001: A Space Odyssey",
    author: "Arthur C. Clarke",
    imageName: "2001ASpaceOdyssey.jpg"
}, {
    id: 3,
    title: "The War of the Worlds",
    author: "H G Wells",
    imageName: "TheWaroftheWorlds.jpg"
}, {
    id: 4,
    title: "Jurassic Park",
    author: "Michael Crichton",
    imageName: "JurassicPark.jpg"
}, {
    id: 5,
    title: "I, Robot",
    author: "Isaac Asimov",
    imageName: "IRobot.jpg"
}];

router.get('/', function (req, res) {
    res.json(books);
});

router.get('/:id', function (req, res) {
    var id = +req.params.id;
    var book = books.filter(function (book) {
        return book.id === id;
    }).pop();

    if (book) {
        res.json(book);
    } else {
        res.sendStatus(404);
    }
});

router.put('/:id', function (req, res) {
    var id = +req.params.id;
    var newBook = req.body;

    var oldBook = books.filter(function (book) {
        return book.id === id;
    }).pop();

    var index = books.indexOf(oldBook);
    books[index] = newBook;

    res.json(newBook);
});

router.post('/', function (req, res) {
    var newBook = req.body;

    newBook.id = Date.now();
    books.push(newBook);

    res.status(201)
        .location(req.originalUrl + '/' + newBook.id)
        .json(newBook);
});

module.exports = router;
