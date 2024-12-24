export const foods = [{
  image: 'istockphoto-473834820-612x612 prawn in black bean-500x500.jpg',
  name: 'Prawn in black bean',
  price: 3800.00
},{
  image: 'istockphoto-598572548-612x612 prawn in cashew nut-500x500.jpg',
  name: 'Prawn in Cashew nut',
  price: 3000.00
},{
  image: 'istockphoto-598572548-612x612 prawn in cashew nut-500x500.jpg',
  name: 'Prawn in Cashew nut',
  price: 3000.00
},{
  image: 'istockphoto-472185893-612x612 prawn in sweet chilli-500x500.jpg',
  name: 'Prawn in sweet chill',
  price: 3200.00
},{
  image: 'istockphoto-1049137452-612x612 chicken in curry-500x500.jpg',
  name: 'Chicken in curry',
  price : 4000.00
},{
  image: 'istockphoto-473834820-612x612 prawn in black bean-500x500.jpg',
  name: 'Prawn in black bean',
  price: 3800.00
}];

let foodsHTML = '';

foods.forEach((food) =>{
  food = `
              <div class="col card flex-4">
            <div class="col col-3">
              <img
                src="Images/${food.image}"
                alt=""
              />
            </div>

            <div class="col col-2 flex">
              <div class="col">
                <h2>${food.name}</h2>
                <p>${food.name}</p>
              </div>

              <div class="col line">
                <p>&#8358;${food.price}</p>
                <p><i class="fa-solid fa-plus"></i></p>
              </div>
            </div>
          </div>
  `
  foodsHTML += food;
});

document.querySelector('.js-popular-foods-container').innerHTML = foodsHTML;