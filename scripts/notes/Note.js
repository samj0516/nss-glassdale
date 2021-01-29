export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__date">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <div class="note__suspect">Suspect: ${ noteObject.suspect }</div>
            <div class="note__text">Note: ${ noteObject.note }</div>
        </section>
    `
}
