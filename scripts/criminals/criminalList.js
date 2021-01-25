import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals()
        let criminalHTML = ""
        
        for (const criminal of criminalArray){
            criminalHTML += Criminal(criminal)
        }
        criminalsContainer.innerHTML = `
            <h2>Glassdale Criminals</h2>
            <section class="criminalsList">
            ${criminalHTML}
            </section`
    })
}