import { getCriminals, useCriminals } from '../criminals/CriminalDataProvider.js'



const contentTarget = document.querySelector(".criminalCard")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === `associates--${criminalObj.id.value}`) {
//         const criminalsArray = useCriminals()
//         const chosenCriminal = criminalsArray.find(criminalObj => {
//             criminalObj.known_associates
//         })
//         alert(chosenCriminal)
//     }
// })

// Create custom event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.class === ".associates") {
        // Get the name of the selected officer
        const selectedAssociate = clickEvent.target.id

        // Define a custom event
        const associateSelectedCustomEvent = new CustomEvent("associateSelected", {
            detail: {
                selectedAssociateName: selectedAssociate
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(associateSelectedCustomEvent)
    }
})

// Create listener for custom alibi event on criminalList
// eventHub.addEventListener("associateSelected", event => {
//     // How can you access the officer name that was selected by the user?
//     if (event.detail.selectedAssociateName !== "0"){
//         const criminalId = event.detail.selectedAssociateName

//     // How can you get the criminals that were arrested by that officer?
//         const criminals = useCriminals()
//         const chosenCriminal = criminalsArray.find(criminalObj => {
//             if(criminalObj.id === criminalId){
//                 return criminalObj.known_associates
//             }
//         })
//             }
//             alert(chosenCriminal)
// })
    
    
