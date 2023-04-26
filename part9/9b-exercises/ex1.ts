const bmiCalculator = (weight: number, height: number) => {
    const result: number = weight / (height * height)
    switch (true) {
        case result < 16: console.log('Underweight (severe thinness)')  
        case result < 16.9: console.log('Underweight (Moderate thinness)') 
        case result < 18.4: console.log('Underweight (Mild thinness)') 
        case result < 24.9: console.log('Normal (healthy weight)') 
        case result < 29.9: console.log('Overweight (Pre-obese)') 
        case result < 34.9: console.log('Obese (Class I)') 
        case result < 39.9: console.log('Obese (Class II)') 
        default: console.log('Obese (Class III)') 
    }
}

const weight = Number(process.argv[2])
const height = Number(process.argv[3])

bmiCalculator(weight, height)