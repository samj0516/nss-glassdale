import { getCriminals, useCriminals } from '../criminals/CriminalDataProvider.js'
import { saveNote } from './NoteDataProvider.js'
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
    let criminalCollection = useCriminals()
    contentTarget.innerHTML = `
    <div>
        <fieldset>
            <legend>Suspect Notes</legend>
            <label for="date">Date</label><br />
            <input type="date" name="date" id="date"><br />
            <label for="noteForm--criminal" class="criminalSelect">
            <select id="noteForm--criminal" class="criminalSelect">
            <option value="0">Please select a criminal...</option>
            ${
                criminalCollection.map(criminal => {
                    return `<option value="${ criminal.id }">${ criminal.name }</option>`
                }).join("")
            }
            </select><br />
            <label for="note">Enter Note</label><br />
            <textarea name="note" id="note"></textarea><br />         

            <button id="saveNote">Save Note</button>
        </fieldset>
    </div>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then(render)
    // render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const dateId = document.querySelector("#date").value
        // const suspectId = document.querySelector("#suspect").value
        const noteId = document.querySelector("#note").value
        const criminalId = document.querySelector("#noteForm--criminal").value
        // Make a new object representation of a note
        const newNote = {
            date: dateId,
            criminalId: parseInt(criminalId),
            note: noteId,
        }

        // Change API state and application state
        saveNote(newNote)
    }
})