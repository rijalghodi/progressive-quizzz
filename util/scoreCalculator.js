export function scoreCalculator(quiz) {
  let score = 0;
  quiz.forEach((questionSet) => {
    const { correctMarker, userAnswer } = questionSet;
    if (correctMarker === userAnswer) {
      score += 10;
    }
  });
  return score;
}
