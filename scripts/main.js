import { wheelOptions } from './wheels.js'
import { technologyOptions } from './technology.js'
import { paintOptions } from './paint.js'
import { interiorOptions } from './interior.js'
import { saveOrder } from './placeorders.js'
import { OrderList } from './orders.js'
const container = document.querySelector("#container")

const render = async () => {
    const wheelOptionsHTML = await wheelOptions()
    const technologyOptionsHTML = await technologyOptions()
    const paintOptionsHTML = await paintOptions()
    const interiorOptionsHTML = await interiorOptions()
    const orderButton = await saveOrder()
    const listOrders = await OrderList()

    const composedHTML = `
        <h1>CARS-R-US</h1>

        <article class="choices">
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>

            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${technologyOptionsHTML}
            </section>

            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>
            
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorOptionsHTML}
        </section>
            <section>${orderButton}</section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            <section>${listOrders}</section>
        </article>
    `

    container.innerHTML = composedHTML
}

render()

