import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "./../convictions/ConvictionProvider.js"
const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const renderToDom = (criminalCollection) => {
    let criminalsHTMLRepresentations = ""
  
    for (const criminal of criminalCollection) {
      criminalsHTMLRepresentations += Criminal(criminal)
    }
    
    criminalsContainer.innerHTML = `
    <h3>Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section>`
  }

  export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals()
        renderToDom(criminalArray)
    })
}




// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('what custom event did you dispatch in ConvictionSelect?', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter()

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

