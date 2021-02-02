import { getWitnesses, useWitnesses } from './WitnessProvider.js'
import { Witness } from './Witness.js'

const eventHub = document.querySelector(".container")
const witnessContainer = document.querySelector(".witnessContainer")


const renderToDom = (witnessCollection) => {
    let witnessHTML = ""
  
    for (const witness of witnessCollection) {
      witnessHTML += Witness(witness)
    }
    witnessContainer.innerHTML = `
    <h2>Witness Statements</h2>
    <section class="witnessList">
    ${witnessHTML}
    </section`
}


export const WitnessList = () => {
    getWitnesses().then(() => {
        const witnessArray = useWitnesses()
        renderToDom(witnessArray)
    })
}


eventHub.addEventListener("witnessClick", customEvent => {
   const criminalBox = document.getElementById('criminalBox')
   const witnessBox = document.getElementById('witnessBox')
//    criminalBox.style.display = "block"
    if(criminalBox.style.display == "block"){
        criminalBox.style.display = "none"
        witnessBox.style.display = 'block'
        WitnessList()
    }else{
        criminalBox.style.display = 'block'
        witnessBox.style.display = 'none'
    }   
})

// .style.display = "none"