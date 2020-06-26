import axios from 'axios'


const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'


async function getAllSubscribers () :Promise<any> {

    const subscribers =  await axios.get(`${baseUrl}/subscribers/all`)
            return subscribers.data


}


getAllSubscribers()

