export const Criminal = (criminalObj) => {
    return  `
    <div class="criminalCard">   
        <h3 class="criminal">${criminalObj.name}</h3>
        <p class="criminal">Age: ${criminalObj.age}</p>
        <p class="criminal">Crime: ${criminalObj.conviction}</p>
        <p class="criminal">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="criminal">Term start: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>    `
}