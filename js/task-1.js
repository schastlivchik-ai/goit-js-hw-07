const categoriesArr = document.querySelectorAll(`#categories .item`)

console.log(`Number of categories: ${categoriesArr.length}`)

categoriesArr.forEach((element) => {
  console.log (`Category: ${element.firstElementChild.textContent}`)
  console.log (`Elements: ${element.lastElementChild.childElementCount}`)
});


