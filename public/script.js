// const axios = require('axios')
const randomQuoteApi = 'http://api.quotable.io/random'

const url = 'http://localhost:3000/snippets/getCode'
const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteInputElement = document.getElementById('quoteInput')
const placeholderDiv = document.getElementById("placeholder")
const textarea = document.querySelector('textarea')
const startBtn = document.querySelector('.start')
const nextBtn = document.querySelector('.next')
const timer = document.getElementById('timer')
const wpm = document.querySelector('.WPM')
const accuracy = document.querySelector('.acc')
let interval;
let sec = 0
let wordlength;
let unit = 0
let ogStr;
let tracker = {}
let idx = 0
let incorrect = 0
const spans = document.getElementsByClassName('char')

startBtn.addEventListener('click', startTimer)

nextBtn.addEventListener('click', () => {
  stopTimer()
  renderNewQuote()
  startBtn.addEventListener('click', startTimer)
  sec = 0
  timer.innerText = sec.toString()
  accuracy.innerText = ""
  wpm.innerText = ""
  textarea.disabled = true
  idx = 0
  incorrect = 0
  tracker = {}
})

function startTimer() {
  textarea.disabled = false
  textarea.focus()

  interval = setInterval(() => {
    sec++
    timer.innerText = "Time: " + sec.toString() + " secs"

    console.log("scrolled")


  }, 1000)
  startBtn.removeEventListener('click', startTimer)
}


function pageScroll() {
  quoteDisplayElement.scrollBy(0,10);
}


function stopTimer() {
  clearInterval(interval)
}



async function getRandomQuote () {
  try {
    const response = await fetch(url + `/${unit}`)
    const data = await response.json()
    return data.snippet
  } catch (err) {
    console.error(err)
  }
  
}
async function renderNewQuote() {
  // const quote = await getRandomQuote()
  // const obj = [
  //   {
  //     name: "Jane Doe",
  //     favoriteGame: "Stardew Valley",
  //     subscriber: false
  //   }
  // ]
  // const quote = JSON.stringify(obj, null, 2)
  const snippet = await getRandomQuote()
  const quote = snippet
  ogStr = quote
  s = ogStr
  s = s.replace(/(^\s*)|(\s*$)/gi, "")
  s = s.replace(/[ ]{2,}/gi, " ")
  s = s.replace(/\n /, "\n")
  wordlength = s.split(" ").length
  // const obj = "const dog = 'cat'"
  // const quote = obj
  // const quote = await getRandomQuote()

 
  
  quoteDisplayElement.innerText = ""
  placeholderDiv.setAttribute('data-placeholder', quote)
  quote.split('').forEach((char) => {
    const characterSpan = document.createElement("span")
    characterSpan.innerText = char

    characterSpan.classList.add('char')
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
}




textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault()

    textarea.setRangeText(
      '  ',
      textarea.selectionStart,
      textarea.selectionStart,
      'end'
    )

    tracker[idx] = " "
    tracker[idx + 1] = " "
    idx +=2
    
  }

  if (e.key === "ArrowUp") {
    e.preventDefault()
    
  }

  if (e.key === "ArrowDown") {
    e.preventDefault()
    
  }

  if (e.key === "Enter") {
    pageScroll()
  }
})



quoteInputElement.addEventListener('input', (evt) => {
  let textValue;
  

 
  
  if (evt.target.value.length === spans.length) {
    // alert(`You did it! Accuracy: ${Math.floor(((spans.length - incorrect) / spans.length) * 100)}`)
    const acc = Math.floor(((spans.length - incorrect) / spans.length) * 100).toString()
    const wpmCalc = Math.round((wordlength / sec) * 60)
    console.log(wpmCalc)
    stopTimer()
    textarea.disabled = true
    wpm.innerText = wpmCalc
    accuracy.innerText = acc
  }

  
    if (idx === evt.target.value.length - 1) {
    tracker[idx] = evt.target.value[idx]
    
  
    textValue = Object.values(tracker).join("")
  

    if (tracker[idx] === spans[idx].innerText) {
      // tracker[idx].status = "C"
      spans[idx].classList.add('correct')
      
      if (tracker[idx] === ogStr[idx] && textValue === ogStr.slice(0, idx + 1)) {
        
        placeholderDiv.setAttribute('data-placeholder', ogStr)
      }
    }else {
      incorrect++
      spans[idx].classList.add('incorrect')
     
      
      if (tracker[idx] !== ogStr[idx]) {
        placeholderDiv.setAttribute('data-placeholder', "")
      } 
      
    }
    idx++
    
  } else {
    
    delete tracker[idx]
    idx--
    
    
    spans[idx].classList.remove('correct')
    spans[idx].classList.remove('incorrect')
  }
} )





renderNewQuote()