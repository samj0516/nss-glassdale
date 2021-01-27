import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"
const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const renderToDom = (criminalCollection) => {
    let criminalHTML = ""
  
    for (const criminal of criminalCollection) {
      criminalHTML += Criminal(criminal)
    }
    criminalsContainer.innerHTML = `
    <h2>Glassdale Criminals</h2>
    <section class="criminalsList">
    ${criminalHTML}
    </section`
  }


  export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals()
        renderToDom(criminalArray)
    })
}




// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        const convictionsArray = useConvictions()
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
            
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
          })
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const criminalsArray = useCriminals()
        const filteredCriminals = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
        renderToDom(filteredCriminals)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }else {
        const criminalsArray = useCriminals()
        renderToDom(criminalsArray)
    }
})

eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    if (event.detail.selectedOfficerName !== "0"){
        const officerName = event.detail.selectedOfficerName

    // How can you get the criminals that were arrested by that officer?
        const criminals = useCriminals()
        const filteredCriminals = criminals.filter(
            criminalObject => {
                if (criminalObject.arrestingOfficer === officerName) {
                    return true
            }
        }
    )
    renderToDom(filteredCriminals)
    }else {
        const criminalsArray = useCriminals()
        renderToDom(criminalsArray)
    }
})
