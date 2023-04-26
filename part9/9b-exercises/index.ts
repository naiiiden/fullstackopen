import express from 'express';
import { bmiCalculator } from './ex1';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
    const weight: number = Number(_req.query.weight)
    const height: number = Number(_req.query.height)
    res.send({ weight: weight, height: height, bmi: bmiCalculator(weight, height) })
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});