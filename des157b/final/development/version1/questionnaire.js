let textArea = document.querySelector("textarea");
let noteContent = document.querySelector("#note-content");
let nameField = document.querySelector("#name");
let nameInput = document.querySelector("#name-input")
let noteOptions = document.querySelectorAll(".note-option")
let tapeOptions = document.querySelectorAll(".tape-option")
let note = document.querySelector("#note");
let noteColors = ["#E8DFF5", "#FCE1E4", "#FCF4DD", "#DDEDEA", "#DAEAF6"];
let tapeColors = ["#00A5E3", "#8DD7BF", "#FF96C5", "#FF5768", "#FFBF65"];

textArea.addEventListener("input", function() {
    noteContent.textContent = textArea.value;
})

nameInput.addEventListener("input", function() {
    nameField.textContent = nameInput.value;
})

noteOptions.forEach((noteOption, index) => {
    noteOption.addEventListener("click", function() {
        note.removeAttribute("class");
        note.classList.add(`note-color-${index+1}`)
    })
    
    noteOption.addEventListener("mouseover", function () {
        noteOption.textContent = noteColors[index]
    })

    noteOption.addEventListener("mouseout", function() {
        noteOption.textContent = "";
    })
})

//TODO
tapeOptions.forEach((tapeOption, index) => {

})
