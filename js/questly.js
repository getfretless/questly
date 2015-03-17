function questly() {

  function uncheckable(element) {
    var checkable_types = ['radio', 'checkbox'];    
    return checkable_types.indexOf(element.type) === -1;
  }

  function getFormValues(ev) {
    // Prevent the default submit behavior.
    ev.preventDefault();
    
    // Save the values of each form field into variables
    var the_form;
    
    the_form = ev.currentTarget;
    var form_values = {};

    for (var i=0; i < the_form.elements.length; i++) {
      var current_element = the_form.elements[i];
      
      if (current_element.checked || uncheckable(current_element)) {
        form_values[current_element.name] = current_element.value;
      }
    }

    writeStory(form_values);
  }

  function writeStory(form_values) {
    var paragraph = document.getElementById('story');
    var quest_items = ['walking stick', 'bag of holding', 'george michael CD', 'towel', 12];
    var name_to_print = form_values.name;

    if (form_values.use_secret) {
      name_to_print = form_values.secret_agent_name;
    }

    paragraph.innerText = name_to_print + ', go forth and complete your quest: ' + 
      form_values.quest + '. Don\'t forget your ' + form_values.color + ' raincoat!';

    paragraph.innerText += ' You should probably also bring these items: ';

    var li_string = '';
    for (var n = 0; n < quest_items.length; n++) {
      li_string += '<li>' + quest_items[n] + '</li>';
    }

    paragraph.innerHTML += '<ul>' + li_string + '</ul>';
  }

  var form = document.querySelector('form');
  form.onsubmit = getFormValues;
}

questly();