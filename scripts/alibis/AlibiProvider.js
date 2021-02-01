import { getCriminals, useCriminals } from '../criminals/CriminalDataProvider.js'



const contentTarget = document.querySelector(".associateContainer")
const eventHub = document.querySelector(".container")



export const AssociatesList = (criminalObj) => {
    const HTMLRep = `<div class="associateCard">
    <h3>Known Associates for: ${criminalObj.name}</h3>
    ${criminalObj.known_associates.map(associate => {
        return  `<section class="associateInfo">
        <div class="associate__name">${associate.name}</div>
                <div>Alibi: ${associate.alibi}</div>
                </section>`
    }).join("")}
    </div>`
    contentTarget.innerHTML = HTMLRep
}




eventHub.addEventListener("AssociateSelected", event => {
    const criminalId = event.detail.criminalId
    const criminals = useCriminals()
    const selectedCriminal = criminals.find((criminalObj) => criminalObj.id === criminalId)
    AssociatesList(selectedCriminal)
})
















// Create custom event
// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.classList.contains(".associates")) {
//         // Get the name of the selected officer
//         const selectedAssociate = clickEvent.target.id

//         // Define a custom event
//         const associateSelectedCustomEvent = new CustomEvent("associateSelected", {
//             detail: {
//                 selectedAssociateId: selectedAssociate
//             }
//         })

//         // Dispatch event to event hub
//         eventHub.dispatchEvent(associateSelectedCustomEvent)
//     }
// })


    
    
