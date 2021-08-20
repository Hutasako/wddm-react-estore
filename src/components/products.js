import React, { useState} from 'react'
import SingleProduct from './products_single'
import {Pagination} from '@material-ui/lab'

const Products = ({data}) => {
    console.log(`Printing`)
    console.log(`${data}`)

    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 5

    const handlePageChange = (event,value) => {
        setCurrentPage(value)
    }

    const start = (currentPage - 1) * pageSize
    const end = start + pageSize

    const numberOfPages = Math.ceil(data.length/pageSize)

    const ProductsDisplay = data.slice(start, end).map((product) => <SingleProduct key={product.id} data={product}/>)
    // console.log("Products!")
    // console.log(`${currentPage}`)
    // console.log(ProductsDisplay)
    return (
        <section className="results">
            <h2 className="subheading">
                Results
            </h2>
            {ProductsDisplay}
            <div className="pagination-wrapper">
            <Pagination  count={numberOfPages} onChange={handlePageChange}/>
            </div>
        </section>
    )
}

export default Products