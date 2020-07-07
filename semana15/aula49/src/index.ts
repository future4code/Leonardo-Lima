import {User} from './user'
import {Customer} from './customer'
import { Employee } from './employee'
import { Seller } from './seller'

// //EXERCICIO 1

  const newUser :User = new User('1','leo@lima.com','Leonardo','123456')


  console.log('ID:' , newUser.getId())
  console.log('Nome:' , newUser.getName())
  console.log('E-mail:' , newUser.getEmail())

//   // Respostas 

//   //A - Não , não é possível imprimir o password   / Mas se eu chamar no console log o newUser ele imprime a senha normalmente . ( então esse private não faz tanto sentido )

//   //B - A mensagem foi impressa uma vez . 


//EXERCICIO 2

  const newCustomer :Customer = new Customer('999','leo@lima.com','Leonardo','123456','4878 7895 9865 5842')

  


  console.log(newCustomer)

  //RESPOSTAS 

  //A- foi impressa uma vez no terminal 

  //B - Foi impressa duas vezez no terminal , pois foi  chamado  no exercicio 1 também .  


  //EXERCICIO 3

  console.log('ID:' , newCustomer.getId())
  console.log('E-mail:' , newCustomer.getEmail())
  console.log('Nome:' , newCustomer.getName())
  console.log('Cartão de crédito:' , newCustomer.getCreditCard())
  console.log('Valor total da compra:' , newCustomer.purchaseTotal)
  

  //EXERCICIO 4


  newCustomer.introduceYourself()

  //EXERCICIO 5

  console.log('Mensagem :' , newCustomer.introduceYourself())

//EXERCICIO 6 

const newEmployee :Employee = new Employee('2','Jett@valorant.com','Jett','123','15/10/2015',10000)

console.log('ID:', newEmployee.getId())
console.log('E-mail:', newEmployee.getEmail())
console.log('Nome:', newEmployee.getName())
console.log('Data de Admissão:', newEmployee.getAdmissionDate())
console.log('Salario Base: R$', newEmployee.getBaseSalary(), 'reais')


//EXERCICIO 7

console.log('Saldo total de: R$',newEmployee.calculateTotalSalary(),'reais')

//EXERCICIOS 8 

const newSeller :Seller = new Seller('3','vendedor','Astro','121212','30/06/2019',900)

console.log('ID:', newSeller.getId())
console.log('E-mail:', newSeller.getEmail())
console.log('Nome:', newSeller.getName())
console.log('Data de Admissão:', newSeller.getAdmissionDate())
console.log('Salario Base: R$', newSeller.getBaseSalary(), 'reais')


//EXERCICIO 9 

console.log(newSeller.setSalesQuantity())