const { dialog } = require('electron').remote
const { isEmpty } = require('lodash')

window.addEventListener('DOMContentLoaded', () => {
 
  document.querySelector('#uploadIcon').addEventListener('click', function (event) {
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
          { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        ]
    }, function (files) {
        if (files !== undefined && !isEmpty.files) {
          PREVIEW.innerHTML = `<img class="Preview_img" id="Preview_img" src="${files}"/>`
        }
    })
  })
})


