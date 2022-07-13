"use strict";
const dollarImg = document.querySelector(".dollar-img");
const personImg = document.querySelector(".person-img");
const zeroRed = document.querySelector(".zero-red");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twentyFive = document.querySelector(".twenty-five");
const fifty = document.querySelector(".fifty");
const custom = document.querySelector(".custom");
const btnReset = document.querySelector(".btn-reset");

const cantBeZero = function () {
  if (personImg.value > 0) {
    personImg.classList.add("bn");
    personImg.classList.remove("border-red");
    zeroRed.classList.add("hidden");
  } else {
    personImg.classList.remove("bn");
    personImg.classList.add("border-red");
    zeroRed.classList.remove("hidden");
  }
};

personImg.addEventListener("input", function () {
  cantBeZero();
});
dollarImg.addEventListener("click", function () {
  cantBeZero();
});

let tipPerPerson;
let totalPerPerson;

const calc = function (rate) {
  const personNum = Number(personImg.value);
  const bill = Number(dollarImg.value);
  tipPerPerson = (bill * rate) / personNum;
  totalPerPerson = tipPerPerson + bill;
  tip.textContent = tipPerPerson.toFixed(2);
  total.textContent = totalPerPerson.toFixed(2);
};
five.addEventListener("click", function () {
  calc(0.05);
});
ten.addEventListener("click", function () {
  calc(0.1);
});
fifteen.addEventListener("click", function () {
  calc(0.15);
});
twentyFive.addEventListener("click", function () {
  calc(0.25);
});
fifty.addEventListener("click", function () {
  calc(0.5);
});
custom.addEventListener("input", function () {
  calc(custom.value / 100);
});

dollarImg.addEventListener("input", function () {
  btnReset.classList.remove("before");
  btnReset.classList.add("after");
});

btnReset.addEventListener("click", function () {
  tip.textContent = "0.00";
  total.textContent = "0.00";
  dollarImg.value = "";
  personImg.value = "";
  btnReset.classList.add("before");
  btnReset.classList.remove("after");
});
