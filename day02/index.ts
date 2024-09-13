//TODO: 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
var challenge = '30 Days Of JavaScript';
//TODO: 2. Print the string on the browser console using __console.log()__
console.log(challenge);
//TODO: 3. Print the __length__ of the string on the browser console using _console.log()_
console.log(challenge.length);
//TODO: 4. Change all the string characters to capital letters using __toUpperCase()__ method
console.log(challenge.toUpperCase());
//TODO: 5. Change all the string characters to lowercase letters using __toLowerCase()__ method
console.log(challenge.toLowerCase());
//TODO: 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
console.log(challenge.substring(0));
//TODO: 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
//TODO: 8. Check if the string contains a word __Script__ using __includes()__ method
console.log(
    `the phrase does${
        challenge.includes('String') ? "'nt" : ''
    } containg the word:Script`
);
//TODO: 9. Split the __string__ into an __array__ using __split()__ method
console.log(challenge.split(' '));
//TODO: 10. Split the string 30 Days Of JavaScript at the space using __split()__ method
console.log(challenge.split('[A-Z]'));

//TODO: 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
/**
 * 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
 */

console.log(
    'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')
);
//TODO: 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
console.log(challenge.replace('JavaScript', 'Python'));

//TODO: 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
console.log(challenge.charAt(15));
//TODO: 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
console.log(challenge.charCodeAt(challenge.indexOf('J')));
//TODO: 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));
//TODO: 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));
//TODO: 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

console.log(
    'You cannot end a sentence with because because because is a conjunction'.indexOf(
        'because'
    )
);
//TODO: 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(
    'You cannot end a sentence with because because because is a conjunction'.lastIndexOf(
        'because'
    )
);
//TODO: 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(
    'You cannot end a sentence with because because because is a conjunction'.search(
        'because'
    )
);

//TODO: 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());
//TODO: 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.startsWith('30'));
//TODO: 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.endsWith('JavaScript'));

//TODO: 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

//TODO: 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of'.concat('JavaScript'));
//TODO: 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

/**
 *var phrase: string = '';
 *for (let i = 0; i < challenge.length; i++) {
 *    if (typeof challenge[i] === 'string') {
 *        if (challenge[i] === challenge[i].toUpperCase()) {
 *            phrase += ' ';
 *            i++;
 *        }
 *    }
 *    phrase += challenge[i];
 *}
 *
 */

// ? Level 2
console.log(
    // 1. Using console.log() print out the following statement:
    "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// 2. Using console.log() print out the following quote by Mother Teresa:
console.log(
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
var L2P3: string | number = '10';
console.log(typeof L2P3);
if (!(L2P3 === '10')) {
    //! TS gives you error for this wrong syntax
    console.log('not equal');

    L2P3 = Number(L2P3);
}
console.log('equal');
console.log(typeof L2P3);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
var L2P4 = parseFloat('9.8');
if (!(L2P4 === 10)) {
    console.log('not equal');
    L2P4 = Math.ceil(L2P4);
}
console.log(L2P4);

// 5. Check if 'on' is found in both python and jargon

if ('python'.includes('on') && 'jargon'.includes('on'))
    console.log("'on' is found in both python and jargon");

// 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
if ('I hope this course is not full of jargon'.includes('jargon'))
    console.log('jargon is included');

// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100));

// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.random() * (50 + 100) - 50);

// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255));

// 10. Access the 'JavaScript' string characters using a random number.
console.log('JavaScript'[Math.floor(Math.random() * 'JavaScript'.length)]);

// 11. Use console.log() and escape characters to print the following pattern.
console.log(`
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
  `);

// 12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
var L2P12 =
    'You cannot end a sentence with because because because is a conjunction';
var becauseIteration = L2P12.indexOf('because');
var becauseIterationL = L2P12.lastIndexOf('because');
console.log(
    L2P12.substr(0, becauseIteration) +
        L2P12.substr(becauseIterationL, L2P12.length - 1)
);

// ?Level 3

var L3P1 =
    'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(L3P1.toLowerCase().match(/love/gi)?.length);

console.log(L2P12.toLowerCase().match(/because/gi)?.length);

const sentence: string =
    '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/[^a-zA-Z]/g, ''));

const L3P3 =
    'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

console.log(L3P3.match(/0-9/g));
