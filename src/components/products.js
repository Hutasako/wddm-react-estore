import React from 'react'
import SingleProduct from './products_single'

const Products = ({data}) => {
    console.log(`Printing`)
    console.log(`${data}`)

    const ProductsDisplay = data.map((product) => <SingleProduct key={product.id} data={product}/>)

    return (
        <section className="results">
            <h2 className="subheading">
                Results
            </h2>
            {ProductsDisplay}
        </section>
    )
}

export default Products