let elHeaderBtn = document.getElementById('headerBtn');
let elHeaderNav = document.getElementById('headerNav');

let a = 0;
function edit() {   
  let edit_save = document.getElementById("edit");
  if(a == 0) {
    edit_save.src = "../images/close.svg";
    a++;
  } else {
    edit_save.src = "../images/menu.svg";
    a=0;
  }
  elHeaderNav.classList.toggle('show');

}