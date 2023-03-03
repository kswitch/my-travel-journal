import React from 'react'
import Header from './js/Header'
import Journey from './js/Journey'
import journeyData from './js/data'
import './styles/index.css'

export default function App() {
  const journeys = journeyData.map(journey => {
    return <Journey 
      key={journey.googleMapsUrl.slice(-17)}
      {...journey}
    />
  })

  return (
      <>
        <Header />
        <div className="journeys">
          {journeys}
        </div>
      </>
  )
}