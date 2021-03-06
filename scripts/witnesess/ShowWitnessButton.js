const buttonTarget = document.querySelector(".witnessButtonContainer")
const eventHub = document.querySelector(".container")

export const ShowWitnessesButton = () => {
    buttonTarget.innerHTML = "<button id='showWitnesses'>Show Witness Statements</button>"
}



eventHub.addEventListener("click", event => {
    if (event.target.id === "showWitnesses"){
      const witnessButtonText = event.target
      const customEvent = new CustomEvent("witnessClick", {
          detail: {
              buttonText: witnessButtonText
                }
            })
        eventHub.dispatchEvent(customEvent)
    }
   
})
