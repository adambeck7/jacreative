/* eslint-disable */
/**
 * letteranimation.js
 * Current Version: 1.0.3
 * https://www.cssanimatio.io
 * Created and maintained by: Pavel
 * Find me at: https://www.linkedin.com/in/yesiamrocks/
 * Email: hello@cssanimation.io
 * Github: https://github.com/yesiamrocks/cssanimation.io
 * Title: A CSS Animation Library for Developers and Ninjas
 * Copyright (c) 2017 Pavel
 * License: cssanimation.io is licensed under the MIT license
 * */

window.onload = function() {
  animateSequence();
  animateRandom();
};

function animateSequence() {
  const a = document.getElementsByClassName('sequence');
  for (let i = 0; i < a.length; i++) {
    const $this = a[i];
    let letter = $this.innerHTML;
    letter = letter.trim();
    let str = '';
    let delay = 1000;
    for (l = 0; l < letter.length; l++) {
      if (letter[l] != ' ') {
        str += `<span style="animation-delay:${delay}ms; -moz-animation-delay:${delay}ms; -webkit-animation-delay:${delay}ms;  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);">${
          letter[l]
        }</span>`;
        delay += 150;
      } else str += letter[l];
    }
    $this.innerHTML = str;
  }
}

function animateRandom() {
  const a = document.getElementsByClassName('random');
  for (let i = 0; i < a.length; i++) {
    const $this = a[i];
    let letter = $this.innerHTML;
    letter = letter.trim();
    let delay = 70;
    const delayArray = new Array();
    let randLetter = new Array();
    for (j = 0; j < letter.length; j++) {
      while (1) {
        var random = getRandomInt(0, letter.length - 1);
        if (delayArray.indexOf(random) == -1) break;
      }
      delayArray[j] = random;
    }
    for (l = 0; l < delayArray.length; l++) {
      let str = '';
      const index = delayArray[l];
      if (letter[index] != ' ') {
        str = `<span style="animation-delay:${delay}ms; -moz-animation-delay:${delay}ms; -webkit-animation-delay:${delay}ms; ">${
          letter[index]
        }</span>`;
        randLetter[index] = str;
      } else randLetter[index] = letter[index];
      delay += 80;
    }
    randLetter = randLetter.join('');
    $this.innerHTML = randLetter;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
