import React, {useState} from 'react';
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

    let [queryState, setQueryState] = useState({
        queryType: '',
        queryRating: 0,
        querySort: '',
        queryFavorite: false,
    })

    const {queryType, queryRating} = queryState

    const results = data
    .filter(({type}) => type.includes(queryType))
    .filter(({rating}) => rating >= queryRating)
    // .sort(sort)

    const typeChangeSearch = (event) => 
    {
      let queryValue = event.target.value
      console.log(`Type Change Query: ${queryValue}`)

        setQueryState({
          ...queryState,
          queryType: event.target.value
        })
      
      }
      
    
    const ratingChangeSearch = (event) => 
    {
      setQueryState({
        ...queryState,
        queryRating: Number(event.target.value)
      })
    }

    const sortChangeSearch = (event) => 
    {
      setQueryState({
        ...queryState,
        type: event.target.value
      })
    }

    return (
        <Layout>
            {/* <Filters/> */}
        <form className="filters">
      
        <div className="filter-options">
        <h2>Filters</h2>
  
          <fieldset onChange={typeChangeSearch}>
            <legend>Type</legend>
            <ul className="filter-list">
              <li><input type="radio" name="producttype" value="" id="All" checked/> <label htmlFor="All">Show All</label></li>
              <li><input type="radio" name="producttype" value="Cartridge" id="Cartridge"/> <label htmlFor="Cartridge">Cartridge</label></li>
              <li><input type="radio" name="producttype" value="Gummy" id="Gummy"/> <label htmlFor="Gummy">Gummy</label></li>
              <li><input type="radio" name="producttype" value="Flower" id="Flower"/> <label htmlFor="Flower">Flower</label></li>
              <li><input type="radio" name="producttype" value="Hash" id="Hash"/> <label htmlFor="Hash">Hash</label></li>
            </ul>
          </fieldset>
        <fieldset className="slider">
          <label htmlFor="filterRatings">Filter by ratings:</label>
          <input type="range" name="productrating" id="filterRatings" value={queryRating} min="0" max="5" step="0.1" onChange={ratingChangeSearch} />
          <output htmlFor="filterRatings">{queryRating.toFixed(1)}</output>
        </fieldset>
          <fieldset>
            <label htmlFor="sort">Show</label>
            <select name="sort" id="sort">
              <option value="price-high">Price, highest to lowest</option>
              <option value="price-low">Price, lowest to highest</option>
              <option value="newest">Newest releases</option>
            </select>
          </fieldset>
        </div>
        
      </form>
            <Products data={results}/>
        </Layout>
    )
}

export default Store;