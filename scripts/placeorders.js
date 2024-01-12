import { saveOrderSubmission } from "./transientstate.js"

const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        
        saveOrderSubmission()
    }
}

export const saveOrder = () => {

    document.addEventListener("click", handleOrderSubmissionClick)

   
    return "<p><button id='saveOrder'>Place Order</button></p>"
}