import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from '../criminals/CriminalDataProvider.js'

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteListContainer")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    const buttonText = customEvent.detail.buttonText
    if(contentTarget.innerHTML == ""){
        buttonText.innerHTML = "Hide Notes"
        // contentTarget.style.display = "inline"
        NoteList()
    }else if(buttonText.innerHTML == "Hide Notes"){
        contentTarget.style.display = "none"
        buttonText.innerHTML = "Show Notes"
    }else if(buttonText.innerHTML == "Show Notes"){
        contentTarget.style.display = "block"
        buttonText.innerHTML = "Hide Notes"
    }
    
    
})


const render = (noteArray, criminalArray) => {
    const allNotesToStrings = noteArray.map(noteObject => {
        const relatedCriminal = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        
        return NoteHTMLConverter(noteObject, relatedCriminal)
    
    }).join("")
    contentTarget.innerHTML = `<h3>Case Notes</h3>
        <article class="notesList">
            ${allNotesToStrings}
        </article>`


     
}



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
  



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})