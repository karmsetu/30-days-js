console.log('%c30 Days Of JavaScript', 'color:green'); // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
); // log output green red and yellow text
console.warn(
    'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
);
const names = ['Asabeneh', 'Brook', 'David', 'John'];
console.table(names);
