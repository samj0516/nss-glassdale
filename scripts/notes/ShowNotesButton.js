const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const showButtonText = clickEvent.target
        const customEvent = new CustomEvent("showNotesClicked",{
        detail: {
            buttonText: showButtonText
              }
        })
        eventHub.dispatchEvent(customEvent)
    }
    
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}
