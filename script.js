function changePageStyle() {
    var inputElement = document.getElementById('vardas')
    var bodyElement = document.body
  
    if (inputElement.value.length <= 2) {
      bodyElement.classList.remove('green-bg')
      bodyElement.classList.add('red-bg')
    } else {
      bodyElement.classList.remove('red-bg')
      bodyElement.classList.add('green-bg')
    }
  }
  