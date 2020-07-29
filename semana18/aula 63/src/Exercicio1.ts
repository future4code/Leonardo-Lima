interface User {
    name: string
    balance: number
}


 function performPurchase(user: User, value: number) : User | undefined {
    if(user.balance >= value){
        return {
            ...user,
            balance: user.balance - value
        }
    }

    return undefined
}

const result = performPurchase({name:'Leo Lima',balance:100}, 170)


export default performPurchase