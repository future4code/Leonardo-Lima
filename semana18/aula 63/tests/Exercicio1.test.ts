import PerformPurchase from '../src/Exercicio1'

describe('validatePurchaseUser', () => {

test('validandoCompra1',() => {

   const result = PerformPurchase({name:'Leo Lima',balance:100}, 70)

   expect(result).toEqual({
      name:'Leo Lima', balance: 30
   })


})

test('validandoCompra2',() => {

   const result = PerformPurchase({name:'Leo Lima',balance:100}, 100)

   expect(result).toEqual({
      name:'Leo Lima', balance: 0
   })


})

test('validandoCompra3',() => {

   const result = PerformPurchase({name:'Leo Lima',balance:100}, 170)

   expect(result).toEqual(undefined)


})

})


