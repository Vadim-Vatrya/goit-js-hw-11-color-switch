const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.startButton.addEventListener('click', pressOnStartButton);
refs.stopButton.addEventListener('click', pressOnStopButton);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function variationBackground() {
  return (refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]);
}

let intervalBcg = null;

function pressOnStartButton() {
  intervalBcg = setInterval(variationBackground, 1000);

  refs.stopButton.disabled = false;
  refs.startButton.disabled = true;
}

function pressOnStopButton() {
  clearInterval(intervalBcg);

  refs.stopButton.disabled = true;
  refs.startButton.disabled = false;
}
