import React from 'react';

const filters = () => {

    return (
        <form class="filters">
      
        <div class="filter-options">
        <h2>Filters</h2>
  
          <fieldset>
            <legend>Type</legend>
            <ul class="filter-list">
              <li><input type="radio" name="type" value="Cartridge" id="Cartridge"/> <label for="Cartridge">Cartridge</label></li>
              <li><input type="radio" name="type" value="Gummy" id="Gummy"/> <label for="Gummy">Gummy</label></li>
              <li><input type="radio" name="type" value="Flower" id="Flower"/> <label for="Flower">Flower</label></li>
              <li><input type="radio" name="type" value="Hash" id="Hash"/> <label for="Hash">Hash</label></li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Ratings (above)</legend>
            <ol class="filter-list filter-ratings">
              <li>
                <input type="radio" name="rating" value="4" id="aboveFour"/>
                <label for="aboveFour">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="3" id="aboveThree"/>
                <label for="aboveThree">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="2" id="aboveTwo"/>
                <label for="aboveTwo">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="1" id="aboveOne"/>
                <label for="aboveOne">
                  <span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
              </li>
            </ol>
          </fieldset>
          <fieldset>
            <label for="sort">Show</label>
            <select name="sort" id="sort">
              <option value="price-high">Price, highest to lowest</option>
              <option value="price-low">Price, lowest to highest</option>
              <option value="newest">Newest releases</option>
            </select>
          </fieldset>
        </div>
        
      </form>
    )
}

export default filters