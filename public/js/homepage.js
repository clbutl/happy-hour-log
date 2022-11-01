const postNewDeal = async (event) => {
    event.preventDefault();

  const itemName = document.getElementById('item-name').value.trim();
  const discount = document.getElementById('discount').value.trim();
  const original = document.getElementById('original').value.trim();
  const start = document.getElementById('start-time').value.trim();
  const end = document.getElementById('end-time').value.trim();
  const dealDay = document.getElementById('day').value.trim();
  const food = document.getElementById('food').value;
  const drink = document.getElementById('drink').value;
  const restaurant = document.getElementById('restaurant').value.trim();
  const city = document.getElementById('city').value.trim();

if ( restaurant && city && start && end) {
  console.log('hit');
    const response = await fetch('/api/location', {
      method: 'POST',
      body: JSON.stringify({restaurantName: restaurant, restaurantCity: city, happyHourTimeStart: start, happyHourTimeEnd: end}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok){
      console.log('hit 2')
    }
    const data = await response.json();
    if(itemName && discount && original && start && end && dealDay && food){
      console.log('hit');
        const response = await fetch('/api/item', {
            method: 'POST',
            body: JSON.stringify({name: itemName, price: discount, originalPrice: original, startTime: start, endTime: end, dealDay: dealDay, isFood: food, locationId: data.id}),
            headers: { 'Content-Type': 'application/json' },
          });
    if(response.ok ){
      console.log('hit 2')
      document.location.replace('/');
      
     
    }else if(itemName && discount && original && start && end && dealDay && drink){
    
      const response = await fetch('/api/item', {
        method: 'POST',
        body: JSON.stringify({name: itemName, price: discount, originalPrice: original, startTime: start, endTime: end, dealDay: dealDay, isFood: drink, locationId: data.id}),
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
}


  document
    .querySelector('#homepageForm')
    .addEventListener('submit', postNewDeal) 