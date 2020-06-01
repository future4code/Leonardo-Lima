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
    <div className="Trip-Container">
      {trips.map(t => {
        return (
          <div className="TripStyle">
            <p className="NameTitulo">Planeta</p>
            <p>{t.planet}</p>
            <p className="NameTitulo">Viagem</p>
            <p>{t.name}</p>
            <p className="NameTitulo">Descrição</p>
            <p>{t.description}</p>
            <p className="NameTitulo">Duração da Viagem</p>
            <p>{t.durationInDays} dias</p>
            <p className="NameTitulo">Data do Lançamento</p>
            <p>{t.date}</p>
            <button>CANDIDATAR-SE</button>
          </div>
        )
      })}
    </div>
  )

}

export default GetTrips
