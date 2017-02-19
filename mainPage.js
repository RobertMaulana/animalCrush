var url = document.URL;
var pemain = '';
function getURL(url){
  if (/[=]/g.test(url)) {
    var split = url.split("=");
    pemain = split[1];
  }
  return pemain;
}

var pemain = document.getElementById("pemain");
pemain.style.fontSize = "36px";
pemain.innerHTML = getURL(url);
var nilai = 0;
function changeImage(){
    var bannerImages = new Array( );

    bannerImages[0] = "asset/animals/giraffe.png";
    bannerImages[1] = "asset/animals/penguin.png";
    bannerImages[2] = "asset/animals/bunny.png";
    bannerImages[3] = "asset/animals/monkey.png";
    bannerImages[4] = "asset/animals/panda.png";
    bannerImages[5] = "asset/animals/bird.png";
    bannerImages[6] = "asset/animals/hippo.png";
    bannerImages[7] = "asset/animals/snake.png";
    bannerImages[8] = "asset/animals/beaver.png";
    bannerImages[9] = "asset/animals/bird1.png";
    bannerImages[10] = "asset/animals/elephant.png";
    bannerImages[11] = "asset/animals/pig.png";

    var image = document.getElementById('img1');
    var image2 = document.getElementById('img2');
    var image3 = document.getElementById('img3');
    var image4 = document.getElementById('img4');
    var image5 = document.getElementById('img5');
    var image6 = document.getElementById('img6');
    var image7 = document.getElementById('img7');
    var image8 = document.getElementById('img8');
    var image9 = document.getElementById('img9');
    var image10 = document.getElementById('img10');
    var image11 = document.getElementById('img11');
    var image12 = document.getElementById('img12');

    var randomImageIndex = Math.floor( Math.random() * bannerImages.length);
    var randomImageIndex2 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex3 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex4 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex5 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex6 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex7 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex8 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex9 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex10 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex11 = Math.round( Math.random() * bannerImages.length) ;
    var randomImageIndex12 = Math.round( Math.random() * bannerImages.length) ;

    image.src = bannerImages[randomImageIndex];
    image2.src = bannerImages[randomImageIndex2];
    image3.src = bannerImages[randomImageIndex3];
    image4.src = bannerImages[randomImageIndex4];
    image5.src = bannerImages[randomImageIndex5];
    image6.src = bannerImages[randomImageIndex6];
    image7.src = bannerImages[randomImageIndex7];
    image8.src = bannerImages[randomImageIndex8];
    image9.src = bannerImages[randomImageIndex9];
    image10.src = bannerImages[randomImageIndex10];
    image11.src = bannerImages[randomImageIndex11];
    image12.src = bannerImages[randomImageIndex11];

    /snake/.test(image.src) ? image.setAttribute("class", "ular") : image.removeAttribute("class");
    /snake/.test(image2.src) ? image2.setAttribute("class", "ular") : image2.removeAttribute("class");
    /snake/.test(image3.src) ? image3.setAttribute("class", "ular") : image3.removeAttribute("class");
    /snake/.test(image4.src) ? image4.setAttribute("class", "ular") : image4.removeAttribute("class");
    /snake/.test(image5.src) ? image5.setAttribute("class", "ular") : image5.removeAttribute("class");
    /snake/.test(image6.src) ? image6.setAttribute("class", "ular") : image6.removeAttribute("class");
    /snake/.test(image7.src) ? image7.setAttribute("class", "ular") : image7.removeAttribute("class");
    /snake/.test(image8.src) ? image8.setAttribute("class", "ular") : image8.removeAttribute("class");
    /snake/.test(image9.src) ? image9.setAttribute("class", "ular") : image9.removeAttribute("class");
    /snake/.test(image10.src) ? image10.setAttribute("class", "ular") : image10.removeAttribute("class");
    /snake/.test(image11.src) ? image11.setAttribute("class", "ular") : image11.removeAttribute("class");
    /snake/.test(image12.src) ? image12.setAttribute("class", "ular") : image12.removeAttribute("class");

    var img = document.getElementsByTagName("img");

    for (var i = 0; i < img.length; i++) {
      if(img[i].getElementsByClassName("ular") !== ""){
        if (img[i].className == "ular") {
          img[i].addEventListener("click", function(){
              nilai = nilai + 1;
              if (nilai === 10) {
                menang(nilai,pemain);
              }
          })
        }
      }
    }
}

window.setInterval(changeImage, 1000);
function menang(nilai,pemain){
  alert('anda menang!');
  var mainLagi = prompt(" Apa ingin bermain lagi? \n Ketik 'ya' jika ingin main lagi, \n Ketik 'tidak' jika tidak ingin melanjutkan.");
  if (mainLagi === "ya") {
    document.location.href = "mainPage.html?pemain="+pemain;
  }else{
    document.location.href = "index.html?score="+nilai;
  }
}
