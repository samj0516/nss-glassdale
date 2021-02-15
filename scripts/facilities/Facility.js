

export const Facility = (facilityObj, criminalObj) => {
    return  `
    <div class="facilityCard">   
        <h3 class="facility">${facilityObj.facilityName}</h3>
        <p class="facility">Security: ${facilityObj.securityLevel}</p>
        <p class="facility">Capacity ${facilityObj.capacity}</p>
        <div class="facility">
                <h3 class="facility">Criminals</h3>
                <ul class="facility">
                    ${criminalObj.map(c => `<li>${c.name}</li>`).join("")}
                </ul>
        </div>
    </div>    `
}

