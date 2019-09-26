// const fs = require('fs')
// const gm = require('gm').subClass({ imageMagick: true })

function openFile(inputFile) {
  inputFile.click()
  inputFile.addEventListener('change', () => {
    let reader = new FileReader()
    reader.readAsDataURL(inputFile.files[0])
    reader.onloadend = () => { 
        const base64data = reader.result     
        document.getElementById('attachmentInput').value = base64data
        document.getElementById('Preview').innerHTML = `<img class="Preview_img" id="Preview_img" src="${base64data}"/>`
    }
  })
}

const resizeInputRange = document.getElementById('formControlRange')
document.getElementById('Range_label').innerHTML = `${resizeInputRange.value} px` // Default value

resizeInputRange.addEventListener('change', () => {
  let rangeValue = resizeInputRange.value
  resizeImage(rangeValue)
  document.getElementById('Range_label').innerHTML = `${rangeValue} px`
})

function resizeImage(sizes) {
  document.getElementById('Preview').style.height = `${sizes}px`
  document.getElementById('Preview').style.width = `${sizes}px`
}
