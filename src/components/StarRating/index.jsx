import React from 'react';
import fstar from '../../assets/full-star.png'
import hstar from '../../assets/half-star.png'
import estar from '../../assets/empty-star.png'
const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating * 2) / 2; 
    const size = 12;
    return (
        <div className='d-flex gap-1'>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                let starType;

                if (starValue <= roundedRating) {
                    starType = "full";
                } else if (starValue === Math.ceil(roundedRating)) {
                    starType = "half"; 
                } else {
                    starType = "empty"; 
                }

                return (
                    <span key={index}>
                        {starType === "full" && (
                            <img src={fstar} width={size} height={size}/>
                        )}
                        {starType === "half" && (
                            <img src={hstar} width={size} height={size}/>
                        )}
                        {starType === "empty" && (
                            <img src={estar} width={size} height={size}/>
                        )}
                    </span>
                )
            })}
        </div>
    )
}

export default StarRating;
