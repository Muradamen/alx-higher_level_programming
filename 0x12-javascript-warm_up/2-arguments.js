#!/usr/bin/node
<<<<<<< HEAD
const count = process.argv.length;
if (count === 2) {
  console.log('No argument');
} else if (count === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
=======

if (process.argv.length === 2) {
    console.log('No argument');
} else if (process.argv.length === 3) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
>>>>>>> eb866d5ce0b40d9f0dc91b4e509c7f33a367dacf
