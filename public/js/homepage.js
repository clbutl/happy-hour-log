

// const postRestaurant = async (event) => {
//   event.preventDefault();

//   const restaurant = document.getElementById('restaurant').value.trim();

//   if(restaurant){
//     const response = await fetch('/api/item', {
//       method: 'POST',
//       body: JSON.stringify({restaurant}),
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }

// }

const postNewDeal = async (event) => {
    event.preventDefault();

  const itemName = document.getElementById('item-name').value.trim();
  const discount = document.getElementById('discount').value.trim();
  const start = document.getElementById('start-time').value.trim();
  const end = document.getElementById('end-time').value.trim();
  const dealDay = document.getElementById('day').value.trim();
  const food = document.getElementById('food').value;
  
 console.log(itemName,
  discount,
  start,
  end,
  dealDay,
  food,
  )

if(itemName && discount && start && end && dealDay && food){
  console.log('hit');
        const response = await fetch('/api/item', {
            method: 'POST',
            body: JSON.stringify({name: itemName, price: discount, timeStart: start, timeEnd: end, dealDay: dealDay, isFood: food}),
            headers: { 'Content-Type': 'application/json' },
          });
if(response.ok ){
  console.log('hit 2')
  document.location.replace('/');
  
 
}else if(itemName && discount && start && end && dealDay ){

  const response = await fetch('/api/item', {
    method: 'POST',
    body: JSON.stringify({itemName, discount, start, end, dealDay}),
    headers: { 'Content-Type': 'application/json' },
  });

if(response.ok ){

  document.location.replace('/');

}else{
  return 'Data not added'
}
}
}
}


  document
    .querySelector('#homepageForm')
    .addEventListener('submit', postNewDeal) 