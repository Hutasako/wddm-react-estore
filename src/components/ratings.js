import React from 'react'

const Ratings = ({data}) => {

    const ratings = data
    console.log(`Ratings: ${ratings}`)
    const starContainer = document.createElement('dd');
    let stars = ratings;

    // Print filled stars
    for (let i = 0;i < ratings; i++){
        stars += `<span class="material-icons">star</span>`;
    }

    // Print empty stars if rating < 5
    if (ratings < 5){
        let diff = 5 - ratings;
        for (let i = 0;i < diff; i++){
            stars += `<span class="material-icons">star_border</span>`;
        }
    }
    starContainer.innerHTML = stars;
    console.log(`Ratings: ${stars}`);
    return (
        <>
        {stars}
        </>
    )
}

export default Ratings