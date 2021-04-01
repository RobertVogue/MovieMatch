import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'

// const onSwipe = (direction) => {
//     console.log('You swiped: ' + direction)
//   }

//   const onCardLeftScreen = (myIdentifier) => {
//     console.log(myIdentifier + ' left the screen')
//   }

//   return (
//     <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
//   )

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
                Example Title
            </div>
            <div className="swipeImage">
                Example Picture
            </div>
            <div className="swipeSyn">
                Example Text
            </div>
        </div>
    </div>
    )


}
export default SwipeContainer
