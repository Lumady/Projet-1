function carrousel() {
  const photos = [
    "photos/crepe-couleur1.jpg",
    "photos/apero1.jpg",
    "photos/crepe-choco1.jpg",
    "photos/crepe-rose1.jpg",
    "photos/crepe-salade1.jpg",
    "photos/crepe-orange1.jpg",
    "photos/crepe-citron1.jpg",
    "photos/sucree1.jpg",
    "photos/fruits-rouges1.jpg",
    "photos/galette1.jpg",
    "photos/crepe-roule-choco1.jpg",
    "photos/crepe-fromage1.jpg",
    "photos/crepe-fourre1.jpg",
    "photos/crepe-apero1.jpg",
    "photos/crepe-choco-chantilly1.jpg",
    "photos/gateau-crepe1.jpg",
    "photos/dessert1.jpg",
    "photos/crepe-dessert1.jpg",
    "photos/crepe-jambon1.jpg",
  ];

  const left = document.querySelector("#left");
  const right = document.querySelector("#right");

  const photo1 = document.querySelector(".cadrePhoto1");
  const photo2 = document.querySelector(".cadrePhoto2");
  const photo3 = document.querySelector(".cadrePhoto3");

  left.addEventListener("click", function () {
    photo1.src = photo2.src;
    photo1.dataset.url = photo2.dataset.url;
    photo2.src = photo3.src;
    photo2.dataset.url = photo3.dataset.url;
    let indexPD3 = photos.indexOf(photo3.dataset.url);

    indexPD3 = indexPD3 < photos.length - 1 ? indexPD3 + 1 : 0;

    photo3.src = photos[indexPD3];
    photo3.dataset.url = photos[indexPD3];
  });

  right.addEventListener("click", function () {
    photo3.src = photo2.src;
    photo3.dataset.url = photo2.dataset.url;
    photo2.src = photo1.src;
    photo2.dataset.url = photo1.dataset.url;
    let indexPD1 = photos.indexOf(photo1.dataset.url);

    indexPD1 = indexPD1 > 0 ? indexPD1 - 1 : photos.length - 1;

    photo1.src = photos[indexPD1];
    photo1.dataset.url = photos[indexPD1];
  });
}

carrousel();
