import { saveNote } from './NoteDataProvider.js'
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
const render = () => {
    contentTarget.innerHTML = `
    <div>
        <fieldset>
            <legend>Suspect Notes</legend>
            <label for="journalDate">Date</label><br />
            <input type="date" name="date" id="date"><br />
            <label for="suspect">Suspect</label><br />
            <input type="text" name="suspect" id="suspect"><br />
            <label for="note">Enter Note</label><br />
            <textarea name="note" id="note"></textarea><br />         

            <button id="saveNote">Save Note</button>
        </fieldset>
    </div>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const dateId = document.querySelector("#date").value
        const suspectId = document.querySelector("#suspect").value
        const noteId = document.querySelector("#note").value
        // Make a new object representation of a note
        const newNote = {
            date: dateId,
            suspect: suspectId,
            note: noteId
        }

        // Change API state and application state
        saveNote(newNote)
    }
})