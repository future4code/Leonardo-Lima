import {User} from './user'
import {Customer} from './customer'

// //EXERCICIO 1

  const newUser :User = new User('1','leo@lima.com','Leonardo','123456')


  console.log('ID:' , newUser.getId())
  console.log('Nome:' , newUser.getName())
  console.log('E-mail:' , newUser.getEmail())

//   // Respostas 

//   //A - Não , não é possível imprimir o password   / Mas se eu chamar no console log o newUser ele imprime a senha normalmente . ( então esse private não faz tanto sentido )

//   //B - A mensagem foi impressa uma vez . 


//EXERCICIO 2

  const newCustomer = new Customer('999','leo@lima.com','Leonardo','123456','4878 7895 9865 5842')


  console.log(newCustomer)

  //RESPOSTAS 

  //A- foi impressa uma vez no terminal 

  //B - Foi impressa duas vezez no terminal , pois foi  chamado  no exercicio 1 também .  


  //EXERCICIO 3

  