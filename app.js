const correctAnswers = ["C", "B", "A", "A"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  //check user answers and add score
  let score = 0;
  const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //show result on page
  scrollTo(0, 0);
  result.classList.add('active');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('.result-highlight').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10)
});