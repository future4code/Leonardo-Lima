import React, { useState } from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-lima"

function CreatTripForm (props) {

    const  [name,setName] = useState("")
    const [description,SetDescription] = useState("")
    const [date,setDate] = useState("")
    const [planet,setPlanet] = useState("")
    const [durationInDays,setDurationInDays] = useState("")
    
    const body {
        name ="" ,
        description = "",
        date = "",
        planet = "",
        durationInDays = ""

    }

axios
.post(`${baseUrl}/trips`, body)




    return (
        <div>
            <form>
            <input type={Text} value={name} placeholder="Nome" required />


            </form>
        </div>
    )
}