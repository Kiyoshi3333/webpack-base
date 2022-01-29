import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import { rangeRight } from 'lodash'

let cards = []
const numberOfAddingCard = 30
const numArray = rangeRight(0, numberOfAddingCard)
let i = 1
const pushCards = () => {
  const newCards = numArray.map((index) => {
    return (
      <div key={i + index} className="bg-amber-300 h-20">
        Hello{i + index}
      </div>
    )
  })
  cards = cards.concat(newCards.reverse())
  i += numberOfAddingCard
}

pushCards()

const Intersection = () => {
  const rootRef = useRef()
  const cardsRef = useRef([])
  const [cardAdded, setCardAdded] = useState(0)

  useEffect(() => {
    let options = {
      root: rootRef.current,
      rootMargin: '0px',
      threshold: [0.5],
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('animate-pulse', entry.isIntersecting)

        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          pushCards()
          setTimeout(() => {
            setCardAdded(cardAdded + 1)
          }, 100)
        }
      })
    }, options)

    /*
     * cardsRef.current.forEach((ref) => {
     *   observer.observe(ref)
     * })
     */
    //Observe only the last element
    if (cardsRef.current.slice(-1)[0])
      observer.observe(cardsRef.current[cardsRef.current.length - 1])
  }, [cardAdded])

  return (
    <div className="grid place-content-center h-screen" id="root">
      <div className="overflow-y-scroll h-500px border-2 w-500px" ref={rootRef}>
        <div className="h-2000px grid grid-cols-1 place-content-start">
          {cards.map((card, i) => (
            <div key={i} ref={(el) => (cardsRef.current[i] = el)}>
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Intersection
