export const OrderList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=wheel&_expand=interior&_expand=technology")
    const orders = await response.json()
    
    // Iterate the submissions and create some <section> representations
    let orderHTML = ""
    for (const order of orders) {
        const orderPrice = order.paint.price + order.wheel.price + order.interior.price + order.technology.price
        orderHTML += `<section>
        
        <div>Order # ${order.id} Cost $${orderPrice}</div>
        </section>`
    }
    return orderHTML
    // Return the HTML string
}