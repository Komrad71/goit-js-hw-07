'use strict';

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
  const inputValue = event.value.trim();
  if (inputValue === '') {
    outputElement.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputValue;
  }
});