import { getOfficers, useOfficers } from './OfficerDataProvider.js'
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

const render = officerCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(officer => {
                    return `<option value="${officer.name}">${officer.name}</option>`
                }).join("")
            }
        </select>
    `
}

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
    .then( () => {
      const officers = useOfficers()
      render(officers)
    })
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const officerSelectedCustomEvent = new CustomEvent("officerSelected", {
            detail: {
                selectedOfficerName: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerSelectedCustomEvent)
    }
})