
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
                $(document).ready(function(){
                    $(document).on("click","#btn",function(event){
                        event.preventDefault()
                        
                        var myPizzaSize=$("#pizzaSize option:selected").text()
                        var myPizzaType=$("#pizzaType option:selected").text()
                        var myCrustType=$("#crusttype option:selected").text()
                        var myToppingType=$("#toppingtype option:selected").text()                 