const textInput = document.getElementById('textInput');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', () => {
    const newText = textInput.value;
    changeButton.textContent = newText;
});