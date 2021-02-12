import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getFacilities, getCriminalFacilities, useCriminalFacilities, useFacilities } from '../facilities/FacilityProvider.js'
const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// const renderToDom = (criminalCollection) => {
//     let criminalHTML = ""
  
//     for (const criminal of criminalCollection) {
//       criminalHTML += Criminal(criminal)
//     }
//     criminalsContainer.innerHTML = `
//     <h2>Glassdale Criminals</h2>
//     <section class="criminalsList">
//     ${criminalHTML}
//     </section`
// }

const renderToDom = (criminalCollection, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    const facilityMatchedCriminal = criminalCollection.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
    criminalsContainer.innerHTML =  `
    <h2>Glassdale Criminals</h2>
    <section class="criminalsList">
    ${facilityMatchedCriminal}
    </section`
}

export const CriminalList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
        const criminalArray = useCriminals()
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
        renderToDom(criminalArray, facilities, crimFac)
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
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
        const criminalsArray = useCriminals()
        const filteredCriminals = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
        renderToDom(filteredCriminals, facilities, crimFac)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }else {
        const criminalsArray = useCriminals()
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
        renderToDom(criminalsArray, facilities, crimFac)
    }
})

eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    if (event.detail.selectedOfficerName !== "0"){
        const officerName = event.detail.selectedOfficerName

    // How can you get the criminals that were arrested by that officer?
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
        const criminals = useCriminals()
        const filteredCriminals = criminals.filter(
            criminalObject => {
                if (criminalObject.arrestingOfficer === officerName) {
                    return true
            }
        }
    )
    renderToDom(filteredCriminals, facilities, crimFac)
    }else {
        const criminalsArray = useCriminals()
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()

        renderToDom(criminalsArray, facilities, crimFac)
    }
})




