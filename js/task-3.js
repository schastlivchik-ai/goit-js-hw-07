const inputName = document.querySelector(`#name-input`)
const outputName = document.querySelector(`#name-output`)

inputName.addEventListener(`input`, () => {
    outputName.innerHTML = inputName.value.trim() || `Anonymous`;
})

