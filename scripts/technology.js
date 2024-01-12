import { setTechnologyChoice } from "./transientstate.js"

const handleTechnologyOptions = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        const chosenOption = changeEvent.target.value
        setTechnologyChoice(parseInt(chosenOption))
    }
}

export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()


 document.addEventListener("change", handleTechnologyOptions)

    let technologyOptionsHTML= ""
    technologyOptionsHTML += `<select id="technology">`
    technologyOptionsHTML += `<option value="0">Select Technology...</option>`          
    
    for (const technology of technologies) {

    technologyOptionsHTML += `<option value="${technology.id}">${technology.name}</option>`
        }
        
    technologyOptionsHTML += `</select>`
    return technologyOptionsHTML
}