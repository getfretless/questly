// var name = prompt('What is your name?');
//
// if (name && name !== 'null') {
//   document.writeln('<p>Hi there, ' + name  +'!</p>');
// }
// else {
//   document.writeln('<p>Fine. Be that way.</p>');
// }
//


// LAB TIME!
//
// Go full Monty Python! Ask "What is your name?", "What is your quest?", and "What is your favorite color". Write something to the document using all three of the entered values.

// For example:
// There once was a warrior named [name] on a mighty quest indeed: [quest]. Luckily, Dave was wearing lucky socks—colored [color].


var name = prompt('What is your name?');
if (!name || name === 'null') {
  name = 'Stupidhead';
}

var quest = prompt('What is your quest?');
if (!quest || quest === 'null') {
  quest = 'To become more cooperative';
}

var color = prompt('What is your favorite color?')
if (!color || color === 'null') {
  color = 'clear';
}

document.writeln('<p>There once was a warrior named ' + name +
  ' on a mighty quest indeed: ' + quest + '. Luckily, ' + name +
  ' was wearing lucky socks&mdash;colored ' + color + '</p>');
