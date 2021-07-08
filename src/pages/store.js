import React from 'react';
import Layout from '../components/layout';
import Filters from '../components/filter';
import Products from '../components/products';

import '../css/style.css';
import '../css/reset.css';
import '../css/product.css';

// import SearchFilter from 'components/SearchFilter';
// // import Products from 'components/Products';

const Store = ({data}) => {
    console.log(`Store: ${data}`)

    return (
        <Layout>
            <Filters/>
            <Products data={data}/>
        </Layout>
    )
}

export default Store;