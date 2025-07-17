export function calculateBMI(weightKg: number, heightCm: number): number {
  // Convert height from cm to meters
  const heightM = heightCm / 100;
  // Calculate BMI
  const bmi = weightKg / (heightM * heightM);
  // Round to 1 decimal place
  return Math.round(bmi * 10) / 10;
}

// Optional: Get BMI category
export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal weight";
  if (bmi < 29.9) return "Overweight";
  return "Obesity";
}
