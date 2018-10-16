function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
<<<<<<< HEAD
 var nested = document.getElementsByClassName('target') 
 return nested[0]
}


=======
  return document.getElementById('nested').querySelector('div.target')
}

>>>>>>> 5967b53ee35f4c77332f6c8a644d904670e07fff
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