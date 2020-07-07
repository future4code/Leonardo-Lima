import {Employee} from './employee'


export class Seller extends Employee {

private salesQuantity : number = 0

public getSalesQuantity() : number {
    return this.salesQuantity
}


public setSalesQuantity() : number {

    return this.salesQuantity = 20
}

}

