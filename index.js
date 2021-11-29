
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
                        
                        var myPizzaValue=parseInt($("#pizzaSize option:selected").val())
                        var myCrustValue=parseInt($("#crusttype option:selected").val())
                        var myToppingValue=parseInt($("#toppingtype option:selected").val())
                        var pizzaQuantity=$("#pizzanumber").val()
                        var finalPizzaPrice=(pizzaQuantity)*(myPizzaValue+myCrustValue+myToppingValue)

                        var myPizzaChoice=new pizza(myPizzaType)
                        var mySizeChoice=new pizzatype(myPizzaSize)
                        var myCrustChoice=new Crusttype(myCrustType)
                        var myToppingChoice=new Toppingtype(myToppingType)

                        $("#output").html("<div>"+"Your Pizza Choice is: "+myPizzaChoice.pizzaSelected()+"<br>"+"Selected Size:"+mySizeChoice.sizeSelected()+"<br>"+"Crust Selected:"+myCrustChoice.crustSelected()+"<br>"+"Topping Selected:  "+myToppingChoice.toppingSelected()+"<br>"+"Total Pizza Price:  "+finalPizzaPrice+"<br>"+" <button id='btnDelivery'>Delivery</button>"+"</div>")
                    })
                    $(document).on("click","#btnDelivery",function(){
                       let DeliveryLocation= prompt("Where do you want your order to be delivered?")
                       if(!DeliveryLocation){
                           alert("Please fill in Your Location!")
                       }
                       else{
                           alert("You will have to pay Ksh.150 extra for delivery")
                       }
                    })
                })