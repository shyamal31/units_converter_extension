// add an invisible modal element to the top of the page
const unitModal = document.createElement('div')
unitModal.setAttribute('class', 'modal')
unitModal.style.visibility = 'hidden'
document.body.appendChild(unitModal)

unitModal.addEventListener('mouseup', (e) => e.stopPropagation())
unitModal.addEventListener('mousedown', (e) => e.stopPropagation())

// This function checks selected text (if any) when the mouse button is released and checks if  we can convert it into units
document.addEventListener('mouseup', (e) => {
  const selection = window.getSelection().toString().trim()
  console.log(selection)
  const MAX_LENGTH = 170
  // selected text is should be between lengths 0 - max_length
  if (selection.length > 0 && selection.length < MAX_LENGTH) {
    // Get all possible unit conversions for given selections
    (async () => {
      console.log(selection)
      const result = await get_conversions(selection)
      if (result.length > 0) {
        const elements = result.split(',').filter(element => element.trim() !== '')
        let modalContent = ''
        if (elements.length > 1) {
          // let favouriteArr = localStorage.getItem('favouriteArr')?JSON.parse(localStorage.getItem('favouriteArr')):[]
          const rr = chrome.storage.sync.get(['favouriteArr']).then((result) => {
            const r = result.favouriteArr ? JSON.parse(result.favouriteArr) : []

            console.log(r)
            const conditionMet = elements.some(e => r.some(item => e.split(' ').includes(item)))

            console.log(conditionMet)

            modalContent = `<p class="modal_heading">${selection}</p>`
            elements.forEach((element, index) => {
              console.log(element.split(' '), r)

              modalContent += `<p class="modal_content ${r.length > 0 && conditionMet ? r.some(item => element.split(' ').includes(item)) ? '' : 'uc_mc_h' : index === 0 ? '' : 'uc_mc_h'}">${element}</p>`
            })
            modalContent += '<button id="viewAllButton">View All</button>'
            showModal(e.clientX, e.clientY, modalContent)
          })
          // Multiple elements, initially hide all elements except the first one
        } else {
          // Only one element, show it without the "View All" button
          modalContent = `<p class="modal_heading">${selection}</p><p class="modal_content">${elements[0]}</p>`
          showModal(e.clientX, e.clientY, modalContent)
        }
      }
    })()
  }
}, false)

// This function hides the modal when the mouse button is pressed
document.addEventListener('mousedown', (e) => {
  unitModal.style.visibility = 'hidden'
}, false)

/**
 * Display the modal at the cursor location and make it visible
 * @param {Object} mouseX
 * @param {Object} mouseY
 * @param {Object} html
 */
// Display the modal at the cursor location and make it visible
function showModal (mouseX, mouseY, html) {
  unitModal.innerHTML = html
  unitModal.style.top = document.documentElement.scrollTop + mouseY + 'px'
  unitModal.style.left = mouseX + 'px'
  unitModal.style.visibility = 'visible'
}

document.addEventListener('click', function (event) {
  if (event.target && event.target.id === 'viewAllButton') {
    const modalContents = document.querySelectorAll('.modal_content')
    modalContents.forEach((element) => {
      element.classList.remove('uc_mc_h')
    })
    viewAllButton.style.display = 'none'
  }
})
