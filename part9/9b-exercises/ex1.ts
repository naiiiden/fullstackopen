export const bmiCalculator = (weight: number, height: number) => {
    const result: number = weight / (height * height)
    switch (true) {
        case result < 16: return 'Underweight (severe thinness)'
        case result < 16.9: return 'Underweight (Moderate thinness)'
        case result < 18.4: return 'Underweight (Mild thinness)'
        case result < 24.9: return 'Normal (healthy weight)'
        case result < 29.9: return 'Overweight (Pre-obese)'
        case result < 34.9: return 'Obese (Class I)'
        case result < 39.9: return 'Obese (Class II)'
        default: return 'Obese (Class III)' 
    }
}