
function pizza(name){
    this.pizzaname=name
    }
    pizza.prototype.pizzaSelected=function(){
        return this.pizzaname
    }
    function pizzatype(size){
        this.pizzatype=size
        }
    pizzatype.prototype.sizeSelected=function(){
            return this.pizzatype
        }