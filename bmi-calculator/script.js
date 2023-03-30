
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const result = document.getElementById('result')

//calculate bmi
const calculateBmi = () => {
    const heightCm = Number(height.value)
    const weightKg = Number(weight.value)

    const bmi = weightKg / (heightCm * heightCm * 0.0001)
    result.innerText = `${bmi}`
}