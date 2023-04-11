

//Q1

  
function addNumber(num) {
  return function(x) {
    return num + x;
  }
}

const addFive = addNumber(5); 
console.log(addFive(10)); 
console.log(addFive(20)); 


//Q2

function searchArray(arr, val) {
 
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}

const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3));
console.log(searchArray(myArray, 6));

//Q3

function addParagraph(text) {
  const paragraph = document.createElement('p');
  const content = document.createTextNode(text); 
  paragraph.appendChild(content); 
  document.body.appendChild(paragraph); 

// Example usage:
addParagraph('This is a new paragraph.');
}

//Q4

function addListItem(text) {
  const listItem = document.createElement('li'); 
  const content = document.createTextNode(text);
  listItem.appendChild(content); 
  const unorderedList = document.querySelector('ul'); 
  unorderedList.appendChild(listItem);
}
// Example usage:
addListItem('New item'); 

//Q5


function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}



//Q6

function saveObjectToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

const myObject1 = { name: 'John', age: 30 };
saveObjectToLocalStorage('my-object', myObject1); 

//Q7

function getObjectFromLocalStorage(key) {
  const storedObject = localStorage.getItem(key);
  return JSON.parse(storedObject); 


const myObject = getObjectFromLocalStorage('myobject'); 
console.log(myObject);

}

//Q8


function saveObjectToLocalStorageAndReturn(key, object) {
    Object.entries(object).forEach(([property, value]) => {
    localStorage.setItem(property, JSON.stringify(value));
  });

  const storedObject = {};
  Object.keys(object).forEach((property) => {
    storedObject[property] = JSON.parse(localStorage.getItem(property));
  });
  return storedObject;
}

const myObject = { name: 'kashif', age: 19 }; 
const storedObject = saveObjectToLocalStorageAndReturn('my-object', myObject); 
console.log(storedObject);













































