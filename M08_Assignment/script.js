function addFunction()
  {
    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');
    var item = document.getElementsById("items").value;
    // Create a text node and store it in a variable.
    var newText = document.createTextNode(item);

    // Attach the new text node to the new element.
    newEl.appendChild(newText);

    // Find the position where the new element should be added.
    var position = document.getElementsByTagName('ul')[0];

    // Insert the new element into its position.
    position.appendChild(newEl);
  }