const router = require('express').Router();
let Book = require('./book');

router.route('/books1').get((req, res) => {
    Book.find()
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:name', async (req, res, next) => {
    // const isbn = req.body.isbn;
    // const author = req.body.author;
	const paramsName = req.params.name;
	console.log(paramsName)
    const name = paramsName.split('=')[1]
    console.log(name)
    try {
		// Search books with input isbn, name, and author
		const books = await Book.find({name: name});
		console.log(books)
		res.json(books);
        next()
	} catch (err) {
		res.status(400).send({
			message: 'An error occured while looking for the book',
		});
	}
})



module.exports = router;