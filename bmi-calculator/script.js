//variables
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const result = document.getElementById('result')

//calculate bmi
const calculateBmi = () => {
    const heightCm = Number(height.value)
    const weightKg = Number(weight.value)

    if((heightCm === '') || (heightCm < 0) || (isNaN(heightCm))){
        //NaN !== NaN
        result.innerText = "Please provide a valid height";
        
    } else if (weightKg === '' || weightKg < 0 || isNaN(weightKg)){
        result.innerText = "Please provide a valid weight";
    } else {
    const bmi = weightKg / (heightCm * heightCm * 0.0001)
    result.innerText = `${bmi.toFixed(1)}`
    }

}