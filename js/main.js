// let wrapper = document.querySelector('.wrapper');

// let article = `
// <article class="home">
// <div class="home-photo w-one-hundred">
//   <img class="app-img" src="img/img2.jpg" alt="" />
//   <div class="superhost"></div>
//   <div class="save-home"></div>
// </div>
// <div class="home-info w-one-hundred">
//   <div class="home-name">
//     <h2 class="home-heading">Apartment in Paracin</h2>
//   </div>
//   <div class="home-rating">
//     <p><i class="fa fa-star rating-star"></i>4.82(17)</p>
//   </div>
// </div>
// <div class="apartment-info">
//   <div class="apartment-name">
//     <p>Studio Apartman br 5</p>
//   </div>
//   <div class="bed-number">1 bed</div>
//   <div class="date">Nov 9-16</div>
// </div>
// <div class="price">
//   <span class="price-tag">$23</span> night
// </div>
// </article>`;

// for(i = 0; i < 12; i++){
//     wrapper.innerHTML += article;
// }



let wrapper = document.querySelector('.wrapper');

let article = document.createElement('article');
article.classList.add('home');


let homePhoto = document.createElement('div');
homePhoto.classList.add('home-photo', 'w-one-hundred');

let img = document.createElement('img');
img.classList.add('app-img');
img.setAttribute('src', 'img/img2.jpg')


homePhoto.appendChild(img);

let homeInfo = document.createElement('div');
homeInfo.classList.add('home-info', 'w-one-hundred');


let homeName = document.createElement('div');
homeName.classList.add('home-name');
let homeHeading = document.createElement('h2');
homeHeading.classList.add('home-heading');
homeHeading.textContent = 'Kopaonik Apartment';

homeName.appendChild(homeHeading);
homeInfo.appendChild(homeName)

let homeRating = document.createElement('div');
homeRating.classList.add('home-rating');

let ratingText = document.createElement('p');
ratingText.innerHTML = `<i class="fa fa-star rating-star"></i> 4.82 (17)`

homeRating.appendChild(ratingText)

homeInfo.appendChild(homeRating)


let apartmentInfo = document.createElement('div');
apartmentInfo.classList.add('apartment-info');
// ------------------------------------------------
let apartmentName = document.createElement('div');
apartmentName.classList.add('apartment-name');
let apartmentNameText = document.createElement('p');
apartmentNameText.textContent = 'Apartment No. 1'

apartmentName.appendChild(apartmentNameText);

let apartmentBeds = document.createElement('div');
apartmentBeds.classList.add('bed-number');
let bedNum = document.createElement('p');
bedNum.textContent = '1 bed'
apartmentBeds.appendChild(bedNum)

let date = document.createElement('div');
date.classList.add('date');
let dateNum = document.createElement('p');
dateNum.textContent = 'Nov 9-16'
date.appendChild(dateNum)

apartmentInfo.appendChild(apartmentName)
apartmentInfo.appendChild(apartmentBeds)
apartmentInfo.appendChild(date)

let price = document.createElement('div');
price.classList.add('price')
let priceP = document.createElement('p');
priceP.innerHTML = `<span class="price-tag">$23</span> night`
price.appendChild(priceP)

article.appendChild(homePhoto)
article.appendChild(homeInfo)
article.appendChild(apartmentInfo)
article.appendChild(price)

wrapper.appendChild(article)