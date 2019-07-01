const chalkAnimation = require('chalk-animation');

chalkAnimation.rainbow('Lorem ipsum dolor sit amet');
const rainbow = chalkAnimation.rainbow('chumaidi'); // Animation starts
 
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 1000);

chalkAnimation.rainbow('Lorem ipsum123123');
setTimeout(() => {
// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' animation, then write on a new line.
    console.log('dolor sit amet123123');
}, 1000);

chalkAnimation.rainbow('Lorem ipsumasdfa');
setTimeout(() => {
// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' animation, then write on a new line.
    console.log('dolor sit ametasdfa');
}, 1000);
let str = 'Loadingggggggggggggggggggggggggggggg..';

 // Add a new dot every second
// setInterval(() => {
//     rainbow.replace(str += '.');
// }, 1000);

 
// rainbow.render(); // Display the first frame
 
// const frame = rainbow.frame(); // Get the second frame
// console.log(frame);
