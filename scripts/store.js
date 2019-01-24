'use strict';

const store= (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm ='';
 
  function findById(id) {
    return this.items.find(function (item){
      return id === item.id;
    });
  }

  function findAndToggleChecked(id) {
    let toggle = this.findById(id);
    toggle.checked = !(toggle.checked);
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      findById(id);
    }
    catch (error) {
      console.log('Cannot update name:', error.message);
    }
  }

  function findAndDelete(id) {
    this.items = this.items.filter(items => {
      return items.id !== id;
    });
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch (error) {
      console.log(error.message);
    }
  }

  return { 
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById: findById,
    findAndUpdateName: findAndUpdateName,
    findAndToggleChecked: findAndToggleChecked,
    findAndDelete: findAndDelete,
    addItem: addItem
  };
} () );