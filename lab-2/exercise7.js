const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function GetBookTitle(bookId){
    return books.find(book => book.id == bookId);
}

console.log("----------------------Get book title-----------------------")
console.log(GetBookTitle(3));
console.log(GetBookTitle(5));

function GetOldBooks(){
    return books.filter(book => book.year < 1950);
}

console.log("----------------------Get old books-----------------------")
console.log(GetOldBooks());

function AddGenre(){
    const newBooks = books.map(book => ({...book, genre: 'classic'}))
    console.log(newBooks);
}

console.log("----------------------Add genre-----------------------")
AddGenre();

function GetTitles(authorInitial){
    const booksClone = [...books]
    return booksClone.filter(book => book.author.startsWith(authorInitial)).map(book => book.title)
}

console.log("----------------------Get author titles-----------------------")
console.log(GetTitles("A"));

//This is easier way of doing it than using forEach and find?
function LatestBook(){
    const booksSort = [...books];
    booksSort.sort((book1, book2) => book1.year - book2.year);
    return booksSort[booksSort.length-1];
}

console.log("----------------------Get latest book-----------------------")
console.log(LatestBook());

//I wasn't sure how I was supposed to find the latest date with forEach and find, like this? There are much better ways of doing it to my knowledge
function LatestBook2(){
    let latestBook;
    books.forEach((book, index) => {
        let laterBook = books.find((book2) => book2.year > book.year);
        if (!laterBook){
            latestBook = books[index]
        }
    })
    return latestBook;
}

console.log("----------------------Get latest book2-----------------------")
console.log(LatestBook2());