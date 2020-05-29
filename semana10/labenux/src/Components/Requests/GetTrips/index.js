import React, { useState, useEffect } from 'react';
import axios from "axios";



const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-lima"

function GetTrips() {

  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/trips`)
      .then(result => {
        setTrips(result.data.trips)
      })
      .catch(error => {
        console.log("erro:", error)
      })

  }, [])

  return (
    <div>
      {trips.map(t => {
        return (
          <div className="TripStyle">
            <p><span>PLaneta:</span>{t.planet}</p>
            <p>{t.name}</p>
            <p>{t.description}</p>
            <p>{t.durationInDays}</p>
            <p>{t.date}</p>
            <button>CANDIDATAR-SE</button>
          </div>
        )
      })}
    </div>
  )

}

export default GetTrips
