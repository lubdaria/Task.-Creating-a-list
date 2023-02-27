//  1 option

let titleElement = document.querySelector('h');
let ul = document.createElement('ul');
titleElement.after(ul);
let resultGetListContent = [];

function getListContent() {
 
  let li = document.createElement('li');
  let textInLiElem = prompt('Enter your text', '');
  li.append(textInLiElem);
  
  if(textInLiElem != ''){
    resultGetListContent.push(li);
    getListContent();
  }
  
  return resultGetListContent;
}

ul.append(...getListContent());


// 2 option

// let titleElement2 = document.querySelector('h');
// let ul2 = document.createElement('ul');
// titleElement.after(ul);

// while (true) {
//   let textInLiElem = prompt('Enter your text', '');

//   if (!textInLiElem) {
//     break;
//   }

//   let li = document.createElement('li');
//   li.textContent = textInLiElem;
//   ul.append(li);
// }