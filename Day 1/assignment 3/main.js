function addToList(){
    const inputValue = document.getElementById("inputValue").value;

    const li = document.createElement('li');
      li.textContent = inputValue;

      const deleteButton = document.createElement('span');
      deleteButton.textContent = '  ✕';
      deleteButton.onclick = function() { li.remove(); };

      li.appendChild(deleteButton);
      document.getElementById('taskList').appendChild(li);

      inputValue = '';
      inputValue.focus();
}
