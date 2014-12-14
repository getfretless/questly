var myForm, nameField, questField, colorField, userData;
myForm = document.querySelector('form');
nameField = myForm.elements.name;
questField = myForm.elements.quest;
colorField = myForm.elements.color;

function getValues(ev) {
  ev.preventDefault();
  userData = {
    name: nameField.value,
    quest: questField.value,
    color: colorField.value
  }
  writeData();
}

function writeData() {
  var storyDiv = document.getElementById('story');
  storyDiv.innerHTML = userData.name + ', ' + userData.quest +
  '. Don\'t forget your ' + userData.color + ' raincoat.';
}

myForm.onsubmit = getValues;
