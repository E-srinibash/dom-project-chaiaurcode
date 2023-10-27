const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please enter a valid value';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please enter a valid value';
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) message.innerHTML = '<span>you are under weight</span>';
    else if (bmi > 18.6 && bmi < 24.9)
      message.innerHTML = '<span>you are in normal range</span>';
    else message.innerHTML = '<span>you are overweight</span>';
  }
});
