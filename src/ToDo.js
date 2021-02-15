import React, {useState} from 'react';
import './ToDo.css';
import List from './components/List';
import ToDoForm from './components/ToDoForm';
import Item from './components/Item';

function ToDo() {

  const [items, setItems] = useState([]);

  function onAddItem(text){

    let item = new Item(text);
    
    setItems([...items, item]);
  }

  function onItemDeleted(item){

    let filteredItems = items.filter(it=> it.id !== item.id)

    setItems(filteredItems);

  }

  function onDone(item){

    let updateItems = items.map(it =>{
      if(it.id === item.id){
        it.done = !it.done;
      }
      return it;
    })
    setItems(updateItems);

  }

  return (<div className="container">
      <h1>To Do</h1>
      <ToDoForm onAddItem={onAddItem}></ToDoForm>
      <List onDone={onDone} items={items} onItemDeleted={onItemDeleted}></List>
    </div>
  );
}

export default ToDo;
