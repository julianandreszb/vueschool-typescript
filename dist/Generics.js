const me = {
    name: 'Daniel',
    age: 34
};
const clone = (value) => {
    const json = JSON.stringify(value);
    return JSON.parse(json);
};
const books = ['Harry Potter', 'Jurrasic Park', 'Goodnight Moon'];
const bookCopies = clone(books);
bookCopies.push('Project Hail Mary');
