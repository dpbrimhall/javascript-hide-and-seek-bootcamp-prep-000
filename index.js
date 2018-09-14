function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 var nested = document.getElementsByClassName('target') 
 return nested[0]
}


function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n)
  }
  return list
}


function deepestChild() {
  var element = document.getElementById('grand-node')
  var child = element.children[0];
  while (child) {
    element = child 
    child = element.children[0]
  }
  return element
}