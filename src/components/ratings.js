import React from 'react'
import {Star, StarOutline} from '@material-ui/icons'

const Ratings = ({data}) => {

    const ratings = data
    console.log(`Ratings: ${ratings}`)
    const starContainer = document.createElement('dd');
    let stars = ratings;
    let starsArr = []
    // Print filled stars
    for (let i = 0;i < ratings; i++){
        // stars += `<span class="material-icons">star</span>`;
        starsArr.push(<Star/>);
    }

    // Print empty stars if rating < 5
    if (ratings < 5){
        let diff = 5 - ratings;
        for (let i = 0;i < diff; i++){
            // stars += `<span class="material-icons">star_border</span>`;
            // stars+=<StarOutlineIcon/>;
            starsArr.push(<StarOutline/>)
        }
    }
    starContainer.innerHTML = stars;
    console.log(`Ratings: ${stars}`);
    return (
        <p>
            {stars}
            {starsArr}
        </p>
    )
}

export default Ratings