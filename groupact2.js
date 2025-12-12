const h = document.getElementById('h');
const w = document.getElementById('w');
const bmi = document.getElementById('output')      
      
      function BMI(height, weight){
            return weight / (height * weight)
        }
        console.log("BMI is:" + BMI(1.50, 70))

        document.getElementById('compute').addEventListener
            const height = parsefloat(h.value);
            const weight = parsefloat(w.value);
            const result = BMI(height, weight);
            bmi.value = result.toFixed(2);