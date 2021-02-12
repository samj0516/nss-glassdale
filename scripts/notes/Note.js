export const NoteHTMLConverter = (noteObj, criminalObj) => {
    return `
        <section class="note">
            <div class="note__date">Date: ${ noteObj.date }</div>
            <div class="note__criminal">Suspect: ${ criminalObj.name }</div>
            <div class="note__text">Note: ${ noteObj.note }</div>
            <button id="deleteNote--${noteObj.id}">Delete</button>
        </section>
    `
}
