document.getElementById("calculate").addEventListener("click", getCalculation,false)

            function getCalculation (){
                var name = document.getElementById("name").value;
                var age = Number(document.getElementById("age").value);
                var country = document.getElementById("select").value;
                var horsepower = Number(document.getElementById("horsepower").value);

                var usa = Math.round(horsepower * 100/ age +50);
                var russia = Math.round(horsepower * 120 / age +100);
                var brazil = Math.round(horsepower * 80 / age +80);
                var other = Math.round(horsepower * 105/ age + 45);


                
                if (country == "USA"){
                    document.getElementById("result").innerHTML = (name + ", your insurance costs: " + usa + " Euros");
                }

                else if (country == "Russia"){
                    document.getElementById("result").innerHTML = (name + ", your insurance costs: " + russia + " Euros");
                }

                else if(country == "Brazil"){
                    document.getElementById("result").innerHTML = (name + ", your insurance costs: " + brazil + " Euros")
                }

                else{
                    document.getElementById("result").innerHTML = ( name + ", your insurance costs: " + other + " Euros");
                }

                
            }