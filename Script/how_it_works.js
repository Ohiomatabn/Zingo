export const howItWorks = [{
  image: 'foode-1.png',
  text: 'Find local Resturant by entering address'
},{
  image: 'foode-2.png',
  text: "Browse hundreds of menus to find the food you're craviing"
},{
  image: 'foode-3.png',
  text: 'Pay using our secure online payment processing services or cash on delivery'
},{
  image: 'foode-4.png',
  text: 'Our ground pilots will blast off & deliver your food in minutes'
}];

let howItWorksHTML = '';

howItWorks.forEach((howItWork) =>{
  howItWork = `
              <div class="col">
            <div class="enjoy-img">
              <img src="Images/${howItWork.image}" alt="" />
            </div>
            <div class="enjoy-text">
              <p>
                ${howItWork.text}
              </p>
            </div>
          </div>
  `

  howItWorksHTML += howItWork;
});

document.querySelector('.js-how-it-works').innerHTML = howItWorksHTML;