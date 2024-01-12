const transientState = {
    "paintId": 0,
    "technologyId": 0,
    "interiorId": 0,
    "wheelId": 0
}



export const setPaintChoice = (paintChoice) => {
transientState.paintId = paintChoice
console.log(transientState)

}
// Functions to modify each property of transient state
export const setTechnologyChoice = (technologyChoice) => {
transientState.technologyId = technologyChoice
console.log(transientState)
}

export const setInteriorChoice = (interiorChoice) => {
    transientState.interiorId = interiorChoice
    console.log(transientState)
}

export const setWheelChoice = (wheelChoice) => {
    transientState.wheelId = wheelChoice
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const saveOrderSubmission = async () => {
const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState)
}


const response = await fetch("http://localhost:8088/orders", postOptions)
}