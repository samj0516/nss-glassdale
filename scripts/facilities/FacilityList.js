import { Facility } from './Facility.js'
import { getFacilities, useFacilities, getCriminalFacilities, useCriminalFacilities } from './FacilityProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalDataProvider.js'
const facilityContainer = document.querySelector('.facilityContainer')
const eventHub = document.querySelector(".container")

const renderToDom = (allFacilities, allCriminals, allRelationships) => {
    // Step 1 - Iterate all criminals
    
    const criminalMatchedFacility = allFacilities.map(
        (facilityObject) => {
            // Step 2 - Filter all relationships to get only ones for this facility
            const criminalRelationshipsForThisFacility = allRelationships.filter(fc => fc.criminalId === facilityObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const criminals = criminalRelationshipsForThisFacility.map(fc => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === fc.facilityId)
                return matchingCriminalObject
            })

            // Must pass the matching facilities to the Criminal component
            return Facility(facilityObject, criminals)
        }
    ).join("")
    facilityContainer.innerHTML =  `
    <h2>Glassdale Facilities</h2>
    <section class="facilitiesList">
    ${criminalMatchedFacility}
    </section`
}

export const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
        const criminalArray = useCriminals()
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
        renderToDom(facilities, criminalArray, crimFac)
    })
}

// Listening for List Facilities button to be clicked. Toggles criminal visibility
eventHub.addEventListener("facilityClick", customEvent => {
    const criminalBox = document.querySelector('.criminalsContainer')
    const facilityBox = document.querySelector('.facilityContainer')
    const buttonText = customEvent.detail.buttonText
    if(criminalBox.style.display == "block" && buttonText.innerHTML === "List Facilities"){
         criminalBox.style.display = "none"
         facilityBox.style.display = 'block'
         FacilityList()
         buttonText.innerHTML = "Show Criminals"
        }
    else if (criminalBox.style.display == "none" && buttonText.innerHTML === "Show Criminals" ){
         criminalBox.style.display = 'block'
         facilityBox.style.display = 'none'
         buttonText.innerHTML = "List Facilities"
        }
     
     
})