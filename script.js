var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var formPemain = document.getElementById("formNamaPemain");
var arrPemain = [];

formPemain.addEventListener("submit", function(e){
  e.preventDefault();
  var namaPemain = document.getElementById("namaPemain");
  if (namaPemain.value !== "") {
      arrPemain.push(namaPemain.value);
      halamanAwal(arrPemain);
  }else{
    alert("Isi Nama dulu!");
  };

});

function halamanAwal(pemain){
  document.location.href = "mainPage.html?pemain="+pemain;
}

var url = document.URL;
var score = '';
if (/[=]/g.test(url)) {
  var split = url.split("=");
  score = split[1];
  var wood = document.getElementsByClassName("wood");
  wood[0].innerHTML = "<img class='wood-img' src='asset/wood/wood_06.png' alt=''>";
  // alert(score);
  // var detail = document.getElementsByClassName("detail");
  var body = document.body;
  var detail = document.createElement("div");
  detail.setAttribute("class", "detail");
  body.appendChild(detail);

  var h5 = document.createElement("h5");
  var isiH5 = document.createTextNode("Score terakhirmu adalah :");
  h5.appendChild(isiH5);
  detail.appendChild(h5);
  var p = document.createElement("p");
  p.setAttribute("id", "pemain");
  var isiP = document.createTextNode(score);
  p.appendChild(isiP);
  detail.appendChild(p);

}else{
  var wood = document.getElementsByClassName("wood");
  wood[0].innerHTML = "";
  // console.log();
  // wood.parentNode.removeChild(elem);
  // wood.classList.remove("class")
}
