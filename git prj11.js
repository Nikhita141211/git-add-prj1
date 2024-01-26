document.getElementById('main-heading').innerText = 'Fruit World';

// Change font color of main heading to orange
document.getElementById('main-heading').style.color = 'orange';

// Change background color of div with id = "header" to green
document.getElementById('header').style.backgroundColor = 'green';

// Add a bottom border of orange color to div with id = "header"
document.getElementById('header').style.borderBottom = '2px solid orange';

// Change font color of 'Fruits In Basket' to green
document.getElementById('basket-heading').style.color = 'green';

var thanksDiv = document.getElementById('thanks');
var paragraph = document.createElement('p');
paragraph.innerText = 'Please visit us again';
paragraph.id = 'thanks-paragraph';
thanksDiv.appendChild(paragraph);

document.getElementById('main-heading').innerText = 'Fruit World';