import React from 'react';
import Layout from '../components/layout';
import Filters from '../components/filter';
import '../css/style.css';
import '../css/reset.css';
import '../css/product.css';

// import SearchFilter from 'components/SearchFilter';
// // import Products from 'components/Products';

const Store = ({products}) => {

    return (
        <Layout>
            <Filters/>
            {/* <Products products={products}/> */}
        </Layout>
    )
}

export default Store;