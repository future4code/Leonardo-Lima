import { connection} from '../Connection'


export class UserDatabase {

private static TABLE_NAME = 'User'

public async creatUser (
    id : string,
    email : string,
    password : string 
) : Promise <void> {
    await connection
    .insert({
        id,
        email,
        password
    })
    .into(UserDatabase.TABLE_NAME)
}


}