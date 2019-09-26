const PREVIEW = document.getElementById('Preview')
const INPUT_RANGE = document.getElementById('formControlRange')
const INPUT_RANGE_LABEL = document.getElementById('Range_label')
const INPUT_NUMBER_HEIGHT = document.getElementById('Height')
const INPUT_NUMBER_WIDTH = document.getElementById('Width')
const INPUT_COLOR = document.getElementById('Color_input')

// Output label's default value
INPUT_RANGE_LABEL.innerHTML = `${INPUT_RANGE.value} px`

// Resize by range input
INPUT_RANGE.addEventListener('change', () => {
  let rangeValue = INPUT_RANGE.value
  resizeImage(rangeValue, rangeValue)
  INPUT_RANGE_LABEL.innerHTML = `${rangeValue} px`
  INPUT_NUMBER_HEIGHT.value = rangeValue
  INPUT_NUMBER_WIDTH.value = rangeValue
})

// Resize height only
INPUT_NUMBER_HEIGHT.addEventListener('change', () => {
  let heightValue = INPUT_NUMBER_HEIGHT.value
  resizeImage(heightValue, PREVIEW.style.width)
})

// Resize width only
INPUT_NUMBER_WIDTH.addEventListener('change', () => {
  let widthValue = INPUT_NUMBER_WIDTH.value
  resizeImage(PREVIEW.style.width, widthValue)
})

function resizeImage(height, width) {
  PREVIEW.style.height = `${height}px`
  PREVIEW.style.width = `${width}px`
}

// Change background color
INPUT_COLOR.addEventListener('change', () => {
  PREVIEW.style.backgroundColor = INPUT_COLOR.value
})

function removeColor() {
  INPUT_COLOR.value = 'transparent'
  PREVIEW.style.backgroundColor = 'transparent'
}

// Change border radium
function changeBorderRadiusToSquare() {
  PREVIEW.style.borderRadius = '0'
}

function changeBorderRadiusToLittleRound() {
  PREVIEW.style.borderRadius = '5%'
}

function changeBorderRadiusToRound() {
  PREVIEW.style.borderRadius = '50%'
}

document.getElementById('downloadFile').onclick = () => {
  domtoimage.toPng(PREVIEW)
    .then(function (dataUrl) {
      let newData = dataUrl.replace(/^data:image\/png/, "data:application/octet-stream")
      let link = document.createElement('a')
      link.setAttribute('href', newData)
      link.setAttribute('download', 'image.png')

      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
    .catch(function (error) {
      console.error('Error:', error)
    })
}
