export const getQuestions = (amount, category, difficult, setState) => {
  setState(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficult}&type=multiple`
  );
};

export const isCorrect = (
  getSelectAnswer,
  data,
  checkAnswer,
  setcheckAnswer,
  count
) => {
  if (getSelectAnswer === data[0]?.questions[count]?.correct_answer) {
    setcheckAnswer({ ...checkAnswer, correct: checkAnswer.correct + 1 });
  } else {
    setcheckAnswer({ ...checkAnswer, incorrect: checkAnswer.incorrect + 1 });
  }
};

export const filterData = ({ results }) => {
  const questions = {
    category: results[0].category,
    difficulty: results[0].difficulty,
    questions: [],
  };

  results.forEach((element) => {
    questions.questions.push({
      question: element.question,
      correct_answer: element.correct_answer,
      answers: resolve(element.correct_answer, element.incorrect_answers),
    });
  });
  console.table(questions.questions);
  return questions;
};

const resolve = (correct, incorrect) => {
  const answers = [correct, ...incorrect];
  const randomAnswer = answers.sort(() => {
    return Math.random() - 0.5;
  });
  return [...randomAnswer];
};
