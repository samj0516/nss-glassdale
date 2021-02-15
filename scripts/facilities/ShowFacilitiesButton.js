const buttonTarget = document.querySelector(".facilityButtonContainer")
const eventHub = document.querySelector(".container")

export const ShowFacilitiesButton = () => {
    buttonTarget.innerHTML = "<button id='showFacilities'>List Facilities</button>"
}





eventHub.addEventListener("click", event => {
    if (event.target.id === "showFacilities"){
      const facilityButtonText = event.target
      const customEvent = new CustomEvent("facilityClick", {
          detail: {
              buttonText: facilityButtonText
                }
            })
        eventHub.dispatchEvent(customEvent)
    }
   
})
