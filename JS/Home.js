/*Dodanie elementa change do CSS*/
function myFunction(x) {
  x.classList.toggle("change");
}

/*Ustalenie maksymalnej szerokości nawigacji bocznej*/
function openNav() {
  document.querySelector("#mySidenav").style.width = "24rem";
  if (window.innerWidth >= 326) {
    document.querySelector("#mySidenav").style.width = "21rem";
  }

}

/*Ustawienie szerokości nawigacji bocznej na 0*/
function closeNav() {
  document.querySelector("#mySidenav").style.width = "0";
}