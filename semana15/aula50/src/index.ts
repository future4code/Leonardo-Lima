import { Client } from "./client";


const newClient : Client = {
    name : 'Leonardo',
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill : () => 2

}

console.log(newClient)

console.log(newClient.calculateBill())