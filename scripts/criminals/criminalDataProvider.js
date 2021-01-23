let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
   return fetch("https://criminals.glassdale.us/officers")
   .then(response => response.json())

}