const form = document.getElementById('addForm')
const ul = document.getElementById('items')
const filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit', addItem)
//remove item event
ul.addEventListener('click', removeItem)
//search/filter item event
filter.addEventListener('keyup', filterItems)


function addItem(e){
    e.preventDefault()
    
    //get input value
    const newItem = document.getElementById('item').value
    
    //creating a blank list item
    const li = document.createElement('li')
    //adding class into blank list item
    li.classList = 'list-group-item'
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
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement
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