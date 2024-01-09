export let Logo =
  "https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png";

export let Swiggy_URL =
  // "https://www.swiggy.com/dapi/restaurants/search/v3?lat=11.0168445&lng=76.9558321&str=restaurants&trackingId=d066ad9c-3bee-7802-5980-857c4caf55d5&submitAction=ENTER&queryUniqueId=1720dbc0-e1a3-8969-6080-f1f34f9b807a";
  // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  `https://api.spoonacular.com/food/restaurants/search?apiKey=${process.env.REACT_APP_API_KEY}&cuisine`;

export let API_KEY = "8673a27dc59847d093754579072fe2d9";
