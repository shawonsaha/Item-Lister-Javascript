let isDark = true; //by default the page is in dark mode

const form = document.getElementById('addForm')
const ul = document.getElementById('items')
const filter = document.getElementById('filter')
const modeSwitch = document.querySelector('.switch_3')

//form submit event
form.addEventListener('submit', addItem)
//remove item event
ul.addEventListener('click', removeItem)
//search/filter item event
filter.addEventListener('keyup', filterItems)
//mode switch event
modeSwitch.addEventListener('click', darkDay)


function addItem(e){
    e.preventDefault()
    //get input value
    const newItem = document.getElementById('item').value
    if(newItem != ''){
        //creating a blank list item
        const li = document.createElement('li')
        //adding class into blank list item
        if(isDark){
            li.classList = 'list-group-item bg-secondary text-light'
        } else {
            li.classList = 'list-group-item'
        }
        //adding text into the blank list item
        li.innerText = newItem

        //creating button element
        const btn = document.createElement('button')
        //adding bootstrap class into button
        btn.classList = 'btn btn-danger btn-sm float-right delete'
        //adding value/text into button
        btn.innerText = 'x'
        //set button as child of list item
        li.appendChild(btn)
        //set li as a child of ul
        ul.appendChild(li)
        //Clear the input field
        document.getElementById('item').value = ''
    }
}


function removeItem(e){
    //if X button is clicked
    if(e.target.classList.contains('delete')){
        //Show alert box to remove li
        if(confirm('Are you sure?')){
            //targeting the parent element of button x
            //which is li
            const li = e.target.parentElement
            //removing li element
            ul.removeChild(li)
        }
    }
}

function filterItems(e){
    //convert Search items into lowercase & store in var text
    var text = e.target.value.toLowerCase()
    
    //collect all items from the list
    var itemLists = ul.getElementsByTagName('li')
    //convert HTMLcollection into an array
    Array.from(itemLists).forEach(function(i){
        //bujhlam na beparta!!!
        var itemName = i.firstChild.textContent;
        //converting list items text into lowercase
        //comparing with the search item
        //if not a match it will return -1
        if(itemName.toLowerCase().indexOf(text) != -1){
            i.style.display = 'block'
        } else {
            //unmatched list items will be hidden
            i.style.display = 'none'
        }
    })
}


function darkDay(){
    //if the page is in dark mode
    if(isDark){
        switchToDay(); //modify DOM to day
       isDark = false; 
       } else {
           switchToDark(); //modify DOM to dark
           isDark = true;
       }
}

function switchToDay(){
    document.querySelector('body').classList.remove('bg-dark')
    document.querySelector('#main-header').classList.add('bg-success')
    document.querySelector('#filter').classList.remove('bg-secondary')
    document.querySelector('#item').classList.remove('bg-secondary')
    document.querySelector('#main').classList.remove('bg-dark')
    document.querySelector('#submit').classList.remove('bg-secondary')
    document.querySelector('#submit').classList.add('bg-success')
    const h2Title = document.querySelectorAll('h2.title')
    h2Title[0].classList.remove('text-muted')
    h2Title[1].classList.remove('text-muted')
    const li = ul.querySelectorAll('li')
    for(let i = 0; i<li.length; i++){
        li[i].classList.remove('bg-secondary')
        li[i].classList.remove('text-light')
    }
}

function switchToDark(){
    document.querySelector('#main-header').classList.remove('bg-success')
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('#filter').classList.add('bg-secondary')
    document.querySelector('#item').classList.add('bg-secondary')
    document.querySelector('#main').classList.add('bg-dark')
    document.querySelector('#submit').classList.remove('bg-success')
    document.querySelector('#submit').classList.add('bg-secondary')
    const h2Title = document.querySelectorAll('h2.title')
    h2Title[0].classList.add('text-muted')
    h2Title[1].classList.add('text-muted')
    const li = ul.querySelectorAll('li')
    for(let i = 0; i<li.length; i++){
        li[i].classList.add('bg-secondary')
        li[i].classList.add('text-light')
    }
}