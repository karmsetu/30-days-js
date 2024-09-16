console.log('heloo');
console.log(document.querySelector('p'));

console.log(document.getElementById('p1'));
console.log(document.getElementById('p2'));
console.log(document.getElementById('p3'));
console.log(document.getElementById('p4'));

console.log(document.querySelectorAll('p'));

document.querySelectorAll('p').forEach((tag) => console.log(tag.innerText));

document.getElementById('p4').innerText = 'Fourth Paragraph';

document.querySelectorAll('p').forEach((para, index) => {
    para.id = `SyntheticPara${index}`;
    para.className = 'SyntheticPara';
});

// Level 2
const colorVariation = ['blue', 'red', 'beige', 'pink'];

document.querySelectorAll('p').forEach((para, index) => {
    para.style.color = colorVariation[index];
    para.style.background = colorVariation[colorVariation.length - index];
    para.style.fontSize = 10;
});

document.querySelectorAll('p').forEach((para, index) => {
    if (!((index + 1) % 2 === 0)) para.style.color = 'green';
    else para.style.color = 'red';
});

// Level 3
