function questly() {
  var myForm, nameField, secretNameField, questField, colorField, userData;
  myForm = document.querySelector('form');
  nameField = myForm.elements.name;
  secretNameField = myForm.elements.secret_name;
  questField = myForm.elements.quest;
  colorField = myForm.elements.color;

  function getValues(ev) {
    ev.preventDefault();
    userData = {
      name: nameField.value,
      secretName: secretNameField.value,
      quest: questField.value,
      color: colorField.value,
      friend: this.elements.friend.checked,
      useSecret: this.elements.use_secret.checked
    }
    writeData();
  }

  function writeData() {
    var storyDiv = document.getElementById('story');
    var friendStory = '';
    if (userData.friend) {
      friendStory = 'Hey, I see you brought your friend!';
    }
    var nameToUseInStory = userData.name;
    if (userData.useSecret) {
      nameToUseInStory = userData.secretName;
    }
    var story = nameToUseInStory + ', ' + userData.quest +
    '. Don\'t forget your ' + userData.color + ' raincoat. ' + friendStory;

    storyDiv.innerHTML = story;
  }

  myForm.onsubmit = getValues;
}
questly();









// LAB ===================================================================
//
// * Move the story above the form.
// * Add a second text field below name, named 'secret_agent_name'.
// * Add a checkbox to allow the user to specify whether to use the secret
//   agent name.
// * Change the story to use the secret agent name *if* the checkbox was checked.










//.
