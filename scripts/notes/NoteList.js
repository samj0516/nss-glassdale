import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from '../criminals/CriminalDataProvider.js'

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteListContainer")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})


const render = (noteArray, criminalArray) => {
    const allNotesToStrings = noteArray.map(noteObject => {
        const relatedCriminal = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        
        return NoteHTMLConverter(noteObject, relatedCriminal)
        debugger
    }).join("")
    contentTarget.innerHTML = `<h3>Case Notes</h3>
        <section class="notesList">
            ${allNotesToStrings}
        </section>`


     
}







// const render = (noteArray, criminalArray) => {
//     contentTarget.innerHTML = noteArray.map(noteObject => {
//         const relatedCriminal = criminalArray.find(criminal => criminal.id === parseInt(noteObject.criminalId))
//         console.log(relatedCriminal)
//         return `
//         <h3>Case Notes</h3>
//         <section class="notesList">
//             <div class="note__date">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
//             <div class="note__criminal">Suspect: ${ relatedCriminal.name }</div>
//             <div class="note__text">Note: ${ noteObject.note }</div>
//         </section>`

//     }).join("")

     
// }

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getCriminals()
        .then(getNotes)
        .then(() => {
            const allNotes = useNotes()
            const criminals = useCriminals()
            render(allNotes, criminals)
        })
}
eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
      NoteList()
    }
  })
  