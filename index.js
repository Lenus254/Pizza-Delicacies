
function pizza(name){
    this.pizzaname=name
    }
    pizza.prototype.pizzaSelected=function(){
        return this.pizzaname
    }