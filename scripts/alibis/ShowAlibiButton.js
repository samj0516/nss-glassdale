
const eventHub = document.querySelector(".container")

export const ShowAssociatesButton = (criminalObj) => {
    return `<button id="associates--${criminalObj.id}">Associate Alibis</button>`
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")){
      const [prefix, criminalId] = event.target.id.split("--")
    const customEvent = new CustomEvent("AssociateSelected", {
        detail: {
            criminalId: parseInt(criminalId)
        }
    })
    eventHub.dispatchEvent(customEvent)
}
})
















