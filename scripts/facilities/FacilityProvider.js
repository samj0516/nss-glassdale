let facilities = []

export const useFacilities = () => facilities.slice()

export const getFacilities = () => {
   return fetch("https://criminals.glassdale.us/facilities")
    .then(response => response.json())
    .then(apiData => {
        facilities = apiData
    })
}

let criminalFacilities = []

export const useCriminalFacilities = () => {
    return criminalFacilities.slice()
}

export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        .then(response => response.json())
        .then(apiData => {
            criminalFacilities = apiData
        })
}