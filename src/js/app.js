const bookListingTemplate = require('../handlebars/book-listing.handlebars');

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  div.innerHTML = bookListingTemplate({
    username: 'test',
    info: 'Your books are due next Tuesday',
    books: [
      { title: 'A book', synopsis: 'With a description' },
      { title: 'Another book', synopsis: 'From a very good author' },
      { title: 'Book without synopsis' },
    ],
  });
  document.body.appendChild(div);
});
