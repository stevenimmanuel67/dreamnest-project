const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
var a = document.getAnimations(addText)

showNotes();

function addNote() {
    let notes = localStorage.getItem('notes');
    if (notes == null){
        notes = [];
    }else{
        notes = JSON.parse(notes); //ada catatan
    }

    if (addText.value === '') {
        return;
    }

    const notesObj = {
        title: addTitle.value,
        text: addText.value,
    }
    addTitle.value ='';
    addText.value ='';
    notes.push(notesObj);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function showNotes() {
    let notesHTML = '';
    let notes = localStorage.getItem('notes');
    if (notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    for (let i = 0; i < notes.length; i++) {
        notesHTML += `<div class="note">
                    <button class="hapusnote" id=${i} onclick="hapusnote(${i})"><i class="ri-delete-bin-5-fill"></i></button>
                    <div class="title boldtext">${notes[i].title}</div>
                    <div class="text">${notes[i].text}</div>
                </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
}
    function hapusnote(index){
        let notes = localStorage.getItem('notes');
        if (notes === null) {
            return;
        } else {
            notes = JSON.parse(notes);
        }
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        showNotes();
    }

addNoteButton.addEventListener('click', addNote);

function togglePopup() {
    var popup = document.getElementById("popup-1");
    popup.classList.toggle("active");
}

