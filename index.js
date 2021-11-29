
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
        function Crusttype(name){
            this.crustName=name
            }
    Crusttype.prototype.crustSelected=function(){
                return this.crustName
            }
            function Toppingtype(name){
                this.toppingName=name
                }
        Toppingtype.prototype.toppingSelected=function(){
                    return this.toppingName
                }        