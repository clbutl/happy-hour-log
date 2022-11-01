

const postNewDeal = async (event) => {
    event.preventDefault();

  const itemName = document.getElementById('item-name').value.trim();
  const discount = document.getElementById('discount').value.trim();
  const start = document.getElementById('start-time').value.trim();
  const end = document.getElementById('end-time').value.trim();
  const dealDay = document.getElementById('day').value.trim();
  const food = document.getElementById('food').value;
  const drink = document.getElementById('drink').value;
  const restaurant = document.getElementById('restaurant').value.trim();

  
 console.log(itemName,
  discount,
  start,
  end,
  dealDay,
  food,
  drink
  )
if(food){

  food.value = true;
}else{

  food.value = false;


}

if(itemName && discount && start && end && dealDay && food){
  console.log('hit');
        const response = await fetch('/api/item', {
            method: 'POST',
            body: JSON.stringify({name: itemName, price: discount, startTime: start, endTime: end, dealDay: dealDay, isFood: food, restaurantName: restaurant}),
            headers: { 'Content-Type': 'application/json' },
          });
if(response.ok ){
  console.log('hit 2')
  document.location.replace('/');
  
 
}else if(itemName && discount && start && end && dealDay && drink){

  const response = await fetch('/api/item', {
    method: 'POST',
    body: JSON.stringify({name: itemName, price: discount, timeStart: start, timeEnd: end, dealDay: dealDay, isFood: drink, location: restaurant}),
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