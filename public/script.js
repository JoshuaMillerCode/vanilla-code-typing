// const randomQuoteApi = 'http://api.quotable.io/random';
const url = '/snippets/get-code';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const placeholderDiv = document.getElementById('placeholder');
const textarea = document.querySelector('textarea');
const startBtn = document.querySelector('.start');
const nextBtn = document.querySelector('.next');
const resetbtn = document.querySelector('.reset');
const timer = document.getElementById('timer');
const wpm = document.querySelector('.WPM');
const accuracy = document.querySelector('.acc');
let interval;
let sec = 0;
let wordlength;
let unit = 0;
let ogStr;
let tracker = {};
let idx = 0;
let incorrect = 0;
let select;

const spans = document.getElementsByClassName('char');

textarea.addEventListener('copy', (e) => {
  e.preventDefault();
});
textarea.addEventListener('paste', (e) => {
  e.preventDefault();
});

startBtn.addEventListener('click', startTimer);

nextBtn.addEventListener('click', () => {
  stopTimer();
  renderNewQuote();
  startBtn.addEventListener('click', startTimer);
  sec = 0;
  timer.innerText = sec.toString();
  accuracy.innerText = '';
  wpm.innerText = '';
  textarea.disabled = true;
  idx = 0;
  incorrect = 0;
  tracker = {};
  gameComplete = false;
});

resetbtn.addEventListener('click', () => {
  stopTimer();
  // renderNewQuote()
  startBtn.addEventListener('click', startTimer);
  sec = 0;
  timer.innerText = 'Time: ' + sec.toString() + ' secs';
  accuracy.innerText = '';
  wpm.innerText = '';
  textarea.value = '';
  textarea.disabled = true;
  idx = 0;
  incorrect = 0;
  tracker = {};
  gameComplete = false;
  for (let el of spans) {
    el.classList.remove('correct');
    el.classList.remove('incorrect');
  }
});

function startTimer() {
  textarea.disabled = false;
  textarea.focus();

  interval = setInterval(() => {
    sec++;
    timer.innerText = 'Time: ' + sec.toString() + ' secs';
  }, 1000);
  startBtn.removeEventListener('click', startTimer);
}

function pageScroll() {
  quoteDisplayElement.scrollBy(0, 10);
}

function stopTimer() {
  clearInterval(interval);
}

async function getRandomQuote() {
  try {
    const response = await fetch(url + `/${unit}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.snippet;
  } catch (err) {
    console.error(err);
  }
}
async function renderNewQuote() {
  const snippet = await getRandomQuote();
  const quote = snippet;
  ogStr = quote;
  s = ogStr;
  s = s.replace(/(^\s*)|(\s*$)/gi, '');
  s = s.replace(/[ ]{2,}/gi, ' ');
  s = s.replace(/\n /, '\n');
  wordlength = s.split(' ').length;

  quoteDisplayElement.innerText = '';
  placeholderDiv.setAttribute('data-placeholder', quote);
  quote.split('').forEach((char) => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = char;

    characterSpan.classList.add('char');
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
}

textarea.addEventListener('click', (e) => {
  if (idx !== select) {
    const end = textarea.value.length;

    textarea.setSelectionRange(end, end);
    textarea.focus();
  }
});

textarea.addEventListener('mousedown', (e) => {
  if (idx !== select) {
    const end = textarea.value.length;

    textarea.setSelectionRange(end, end);
    textarea.focus();
  }
});
document.addEventListener('mouseup', (e) => {
  if (idx !== select) {
    const end = textarea.value.length;

    textarea.setSelectionRange(end, end);
    textarea.focus();
  }
});

// Event Listener for the input inside the textarea
quoteInputElement.addEventListener('input', (evt) => {
  let textValue;

  select = evt.target.selectionStart - 1;

  if (idx !== select) {
    const end = textarea.value.length;

    textarea.setSelectionRange(end, end);
    textarea.focus();
  }

  // if our idx variable matches the length of users input
  if (idx === evt.target.value.length - 1) {
    // add the char to the tracker obj as the value and the idx as the key
    tracker[idx] = evt.target.value[idx];
    // join our object values into a string
    textValue = Object.values(tracker).join('');
    // check if the tracker's char under the idx value is equal to the provided snippets same idx char
    if (tracker[idx] === spans[idx].innerText) {
      // if correct, add the correct class to the span to display the user input is correct
      spans[idx].classList.add('correct');

      // check for a the correct value after an incorrect char is type, if they backspace to try to fix the error it will check everytime to see of the value is correct so it can reset the placeholder
      if (
        tracker[idx] === ogStr[idx] &&
        textValue === ogStr.slice(0, idx + 1)
      ) {
        placeholderDiv.setAttribute('data-placeholder', ogStr);
      }
    } else {
      // add to the incorrect counter
      incorrect++;
      // set span class to incorrect
      spans[idx].classList.add('incorrect');
      //compare the values, if they are not equal, remove the placeholder
      if (tracker[idx] !== ogStr[idx]) {
        placeholderDiv.setAttribute('data-placeholder', '');
      }
    }
    //increament the idx
    if (evt.target.value.length === spans.length) {
      // Calculating the accuracy of the user typing compared the provided code snippet
      const acc = Math.floor(
        ((spans.length - incorrect) / spans.length) * 100
      ).toString();
      // Calculating the words per minute based on the amount of words in the snippet compared to the time it took for the user to finish
      const wpmCalc = Math.round((wordlength / sec) * 60);
      // Clear the interval for the timer
      stopTimer();
      // Disable the textarea
      textarea.disabled = true;
      // Set calculations above to the dom
      wpm.innerText = wpmCalc;
      accuracy.innerText = acc;
      gameComplete = true;

      if (evt.target.value === ogStr) {
        alert('You did it! and you code executed successfully');
      } else {
        alert('i mean sure but the code threw an error while execution');
      }
    }

    idx++;
  } else {
    const ogDone = ogStr.slice(0, idx);
    const difflength = ogDone.length - evt.target.value.length;

    //they have backspaced so the tracker and idx need to follow

    for (let i = 0; i < difflength; i++) {
      idx--;
      delete tracker[idx];
      spans[idx].classList.remove('correct');
      spans[idx].classList.remove('incorrect');
    }

    // else {
    //   delete tracker[idx]
    //   idx--
    //   spans[idx].classList.remove('correct')
    //   spans[idx].classList.remove('incorrect')
    // }
  }
});

// textarea.addEventListener('click', (e) => {
//   e.stopPropagation()
// })

textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();

    textarea.setRangeText(
      '  ',
      textarea.selectionStart,
      textarea.selectionStart,
      'end'
    );

    tracker[idx] = ' ';
    tracker[idx + 1] = ' ';
    idx += 2;
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
  }

  if (e.ctrlKey) {
    e.preventDefault();
  }

  if (e.metaKey) {
    e.preventDefault();
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault();
  }

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
  }

  if (e.key === 'ArrowRight') {
    e.preventDefault();
  }

  if (e.key === 'Enter') {
    pageScroll();
  }
});

textarea.addEventListener('keyup', (e) => {
  if (e.key === 'Backspace') {
    const currentValue = Object.values(tracker).join('');
    const val = currentValue.slice(0, currentValue.length);
    const og = ogStr.slice(0, idx);

    if (val === og) {
      placeholderDiv.setAttribute('data-placeholder', ogStr);
    }
  }
});

renderNewQuote();
