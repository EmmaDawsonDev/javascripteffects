const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkAll = document.querySelector('#checkAll');
const uncheckAll = document.querySelector('#uncheckAll');
const reset = document.querySelector('#reset');


  // function which adds inputted items to the list
  function addItem(event) {
      event.preventDefault();
      const text = (this.querySelector('[name=item]')).value;
      const item = {
          text: text,
          done: false
      };
      items.push(item);
      populateList(items, itemsList);
      localStorage.setItem('items', JSON.stringify(items));
      this.reset();
  }

  // function which makes the added items visible to user by creating inner HTML
  function populateList(plates = [], platesList){
      platesList.innerHTML = plates.map((plate, i) => {
          return `<li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ""} />
            <label for="item${i}">${plate.text}</label>
          </li>
          `;
      }).join('');
  }

  // function which allows toggling on/off of checkboxes
  function toggleDone (event) {
      if (!event.target.matches('input')) return;
      const element = event.target;
      const index = element.dataset.index;
      items[index].done = !items[index].done;
      localStorage.setItem('items', JSON.stringify(items));
      populateList (items, itemsList);
  }

 // function which checks/unchecks all checkboxes when clicked
 function toggleAll(newCheckState) {
     items.forEach(item =>item.done = newCheckState);
     populateList (items, itemsList);
     localStorage.setItem('items', JSON.stringify(items));
    }
  
 //function which resets the entire form
 function resetForm() {
     window.localStorage.clear();
     window.location.reload();
    }

//adding the event listeners
addItems.addEventListener ('submit', addItem);
itemsList.addEventListener ('click', toggleDone);
populateList(items, itemsList);
checkAll.addEventListener('click', () => toggleAll(true));
uncheckAll.addEventListener('click', () => toggleAll(false));
reset.addEventListener('click', resetForm);