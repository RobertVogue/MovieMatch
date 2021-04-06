import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import requests from "../../requests";
import Row from '../additional/Movie'

const SwipeContainer = () => {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
  }
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
  }
  return (
    <div className="swipeCard">
        <div className="swipeDetails">
            <TinderCard
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                preventSwipe={['right', 'left']}>
            </TinderCard>
            <div className="swipeTitle">
                <h1>Title of Card</h1>
            </div>
            <div className="swipeImage">
                <img />
            </div>
            <div className="swipeSyn">
                Description
            </div>
        </div>
    </div>
    )


}
export default SwipeContainer
