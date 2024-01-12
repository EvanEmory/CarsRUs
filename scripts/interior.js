import { setInteriorChoice } from "./transientstate.js"

const handleInteriorOptions = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        const chosenOption = changeEvent.target.value
        setInteriorChoice(parseInt(chosenOption))
    }
}

export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()


 document.addEventListener("change", handleInteriorOptions)

    let interiorOptionsHTML= ""
    interiorOptionsHTML += `<select id="interior">`
    interiorOptionsHTML += `<option value="0">Select Interior...</option>`          
    
    for (const interior of interiors) {

    interiorOptionsHTML += `<option value="${interior.id}">${interior.name}</option>`
        }
        
    interiorOptionsHTML += `</select>`
    return interiorOptionsHTML
}