document.getElementById("calculate").addEventListener("click", getCalculation,false)

            function getCalculation (){
                var name = document.getElementById("name").value;
                var age = Number(document.getElementById("age").value);
                var country = document.getElementById("select").value;
                var horsepower = Number(document.getElementById("horsepower").value);

                document.getElementById("result").innerHTML = ( name + ", your insurance costs: " + age * horsepower + " Euros");
            }