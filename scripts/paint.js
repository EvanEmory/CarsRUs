import { setPaintChoice} from "./transientstate.js"

const handlePaintOptions = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        const chosenOption = changeEvent.target.value
        setPaintChoice(parseInt(chosenOption))
    }
}

export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()


 document.addEventListener("change", handlePaintOptions)

    let paintOptionsHTML= ""
    paintOptionsHTML += `<select id="paint">`
    paintOptionsHTML += `<option value="0">Select Paint...</option>`          
    
    for (const paint of paints) {

    paintOptionsHTML += `<option value="${paint.id}">${paint.name}</option>`
        }
        
    paintOptionsHTML += `</select>`
    return paintOptionsHTML
}