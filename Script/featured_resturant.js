export const resturants = [{
  image: '164935-465x320.png',
  name: 'Elixir Lounge',
  product: 'Snacks'
},{
  image: 'VPtqhR_logo-465x320.jpg',
  name: 'Chops',
  product: 'Snacks'
},{
  image: 'logo vanilamoon-465x320.png',
  name: 'Vanilla Moon',
  product: 'Vanila'
},{
  image: 'akassa-465x320.jpg',
  name: 'Akassa',
  product: 'Akassa'
},{
  image: 'istockphoto-472185893-612x612 prawn in sweet chilli-500x500.jpg',
  name: 'Chilled Fish',
  product: 'Prawn'
},{
  image: 'istockphoto-473834820-612x612 prawn in black bean-500x500.jpg',
  name: 'Crispy',
  product: 'Prawn'
}];

let resturantHTML = '';
resturants.forEach((resturant) =>{
  resturant = `
              <div class="col card flex-4">
            <div class="col col-3">
              <img
                src="Images/${resturant.image}"
                alt=""
              />
            </div>
            <div class="col col-2">
              <h2>${resturant.name}</h2>
              <p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </p>
              <p><em>${resturant.product}</em></p>
              <p>
                <i class="fa-solid fa-truck"></i> Delivery
                <i class="fa-solid fa-clock closed"></i>Closed
              </p>
            </div>
          </div>
  `
  resturantHTML += resturant;
});

document.querySelector('.js-resturant-container').innerHTML = resturantHTML;