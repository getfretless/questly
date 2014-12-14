var myForm, nameField, questField, userData;
myForm = document.querySelector('form');
nameField = myForm.elements.name;
questField = myForm.elements.quest;

function getValues(ev) {
  ev.preventDefault();
  userData = {
    name: nameField.value,
    quest: questField.value
  }
  writeData();
}

function writeData() {
  var storyDiv = document.getElementById('story');
  storyDiv.innerHTML = userData.name + ', ' + userData.quest;
}

myForm.onsubmit = getValues;
