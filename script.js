
const entryForm = document.getElementById('entryForm')
const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')

console.log(entryForm)
console.log(entriesSection)

let entries = 0

const handleForm = e => { 
    event.preventDefault()

    const entryDiv = document.createElement('div')
    entryDiv.className = 'single-entry'
    entryDiv.innerHTML = entryTextbox.value
    entryDiv.style.display = 'none'
    entriesSection.appendChild(entryDiv)
    
    entryTextbox.value = ""
    const displayEntryButton = document.createElement('button')
    displayEntryButton.className = 'display-entry-button'
    displayEntryButton.innerText = ++entries
    entriesNav.appendChild(displayEntryButton)

    displayEntryButton.addEventListener('click', function() { 
      const allEntries = document.querySelectorAll('.single-entry')
      allEntries.forEach(element => element.style.display = 'none')
      entryDiv.style.display = 'block'
    })
  } 
entryForm.addEventListener('submit', handleForm)