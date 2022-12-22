// DECLARING VARIABLES
const counterNormal = document.querySelector("#normal_counter");
const btnNormal = document.querySelectorAll(".btn--normal");
const clickCountNormal = document.querySelector("#normal_click_counter");
const clearNormal = document.querySelector("#normal_clear");

const counterDebounce = document.querySelector("#debounce_counter");
const btnDebounce = document.querySelectorAll(".btn--debounce");
const clickCountDebounce = document.querySelector("#debounce_click_counter");
const clearDebounce = document.querySelector("#debounce_clear");

// DEFINING FUNCTIONS
function clickCounter(event) {
  if (event.target.classList.contains("btn--normal")) {
    clickCountNormal.innerHTML = Number(clickCountNormal.innerHTML) + 1;
  }

  if (event.target.classList.contains("btn--debounce")) {
    clickCountDebounce.innerHTML = Number(clickCountDebounce.innerHTML) + 1;
  }
}

function clear(event) {
  if (event.target.id === "normal_clear") {
    clickCountNormal.innerHTML = 0;
    counterNormal.innerHTML = 0;
  }

  if (event.target.id === "debounce_clear") {
    clickCountDebounce.innerHTML = 0;
    counterDebounce.innerHTML = 0;
  }
}

// SIMULATING PROBLEM
function normalClickHandler(event) {
  btnNormal.forEach((btn) => {
    btn.removeEventListener("click", normalClickHandler);
  });

  const action = event.target.value;

  setTimeout(() => {
    const newValue =
      action === "remove"
        ? Number(counterNormal.innerHTML) - 1
        : action === "add"
        ? Number(counterNormal.innerHTML) + 1
        : "";

    counterNormal.innerHTML = newValue;

    btnNormal.forEach((btn) => {
      btn.addEventListener("click", normalClickHandler);
    });
  }, 1000);
}

// SIMULATING DEBOUNCE
let debouncedValue = Number(counterDebounce.innerHTML);
let debounceTimer = null;

function debounceClickHandler(event) {
  clearTimeout(debounceTimer);

  const action = event.target.value;

  action === "remove"
    ? (debouncedValue -= 1)
    : action === "add"
    ? (debouncedValue += 1)
    : "";

  debounceTimer = setTimeout(() => {
    counterDebounce.innerHTML = debouncedValue;
  }, 1000);
}

// ATTACHING LISTENERS
[normalClickHandler, clickCounter].forEach((fn) =>
  btnNormal.forEach((btn) => {
    btn.addEventListener("click", fn);
  })
);

[debounceClickHandler, clickCounter].forEach((fn) =>
  btnDebounce.forEach((btn) => {
    btn.addEventListener("click", fn);
  })
);

[clearNormal, clearDebounce].forEach((el) =>
  el.addEventListener("click", clear)
);
