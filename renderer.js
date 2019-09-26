function openFile(inputFile) {
  inputFile.click()
  inputFile.addEventListener('change', () => {
    let reader = new FileReader()
    reader.readAsDataURL(inputFile.files[0])
    reader.onloadend = () => { 
        const base64data = reader.result     
        document.getElementById('attachmentInput').value = base64data
        document.getElementById('Preview').innerHTML = `<img class="Preview_img" src="${base64data}"/>`
    }
  })
}
