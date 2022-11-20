export class QuestionSet {
  constructor(number, question, answers, correctMarker, userAnswer) {
    this.number = number;
    this.question = question;
    this.answers = answers;
    this.correctMarker = correctMarker;
    this.userAnswer = userAnswer;
  }
}

export class Answer {
  constructor(marker, answer) {
    this.marker = marker;
    this.answer = answer;
  }
}

/*
 * questionSetNormalizer is a function to rearrange the questionSet from
 * Open Trivia DB API format to format that more conveniece to manage
 */
export function questionSetNormalizer(number, question, correct, incorrects) {
  const numQuestions = incorrects.length + 1;

  // Marker (A, B, C, D)
  let markers = [];
  for (let i = 0; i < numQuestions; i++) {
    markers = [...markers, String.fromCharCode(i + 65)];
  }

  // Marker for the correct answer
  const random = Math.floor(Math.random() * numQuestions);
  const correctMarker = markers[random];

  // answers collection
  let answers = [];
  let indexIncorrects = 0;
  markers.forEach((marker) => {
    if (marker !== correctMarker) {
      const answer = new Answer(marker, incorrects[indexIncorrects]);
      answers.push(answer);
      indexIncorrects++;
    } else {
      const answer = new Answer(marker, correct);
      answers.push(answer);
    }
  });
  const rawQuestionSet = new QuestionSet(
    number,
    question,
    answers,
    correctMarker,
    ""
  );
  // Serialize
  const questionSet = JSON.parse(JSON.stringify(rawQuestionSet));
  return questionSet;
}

/*
 * quizNormalizer is a function to rearrange the 'result' variable from
 * Open Trivia DB API format to format that more conveniece to manage
 */
export default function quizNormalizer(questionSetCollection) {
  let quiz = [];
  let number = 0;
  questionSetCollection.forEach((questionSet) => {
    number++;
    const { question, correct_answer, incorrect_answers } = questionSet;
    const NormalizedQuestionSet = questionSetNormalizer(
      number,
      question,
      correct_answer,
      incorrect_answers
    );
    quiz.push(NormalizedQuestionSet);
  });

  return quiz;
}
