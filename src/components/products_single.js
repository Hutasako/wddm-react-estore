import React from 'react'
import Ratings from './ratings'

const Products_Single = ({data}) => {

    const {id, name, type, desc, rating, options, imgs, price, favorite} = data;
    console.log(data);

    return(
        <article className="product">
            <header>
                <img src={"../img/oregano.jpg"} alt="Product Image"/>
                    <button type="button" className={favorite == 'true' ? "fav-btn active": "fav-btn"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>           
                <div className="pad-content">
                <h3>{name}</h3>
                    <h5 className='type'>{type}</h5>
                        {price.sale == 'true'
                            ? <data value={price.salePrice}> <del>${price.current}</del> <ins>${price.salePrice}</ins></data>
                            : <data value={price.current}><ins>${price.current}</ins></data>
                        }
                    <p>{desc}</p>
                    <dl>
                    <dt>Rating</dt>
                    {/* <dd>${getRating(item.rating)}</dd> */}
                    <Ratings data={rating}/>
                    </dl>
                    <a href="#">see more</a>
                    </div>
            </header>
                {/* ${getOptions(item.options)}      */}
                <footer>
                <button type="button" class="add-cart">Add to Cart</button>
            </footer>
        </article>
    )
}

export default Products_Single;