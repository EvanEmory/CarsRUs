import { setWheelChoice } from "./transientstate.js"

const handleWheelOptions = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        const chosenOption = changeEvent.target.value
        setWheelChoice(parseInt(chosenOption))
    }
}

export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()


 document.addEventListener("change", handleWheelOptions)

    let wheelOptionsHTML= ""
    wheelOptionsHTML += `<select id="wheel">`
    wheelOptionsHTML += `<option value="0">Select Wheel...</option>`          
    
    for (const wheel of wheels) {

    wheelOptionsHTML += `<option value="${wheel.id}">${wheel.name}</option>`
        }
        
    wheelOptionsHTML += `</select>`
    return wheelOptionsHTML
}
