
function init() {
  // Register event listeners
  $('login-btn').addEventListener('click', login);
  $('nearby-btn').addEventListener('click', loadNearbyRestaurants);
  $('fav-btn').addEventListener('click', loadFavoriteRestaurants);
  $('recommend-btn').addEventListener('click', loadRecommendedRestaurants);
  
  validateSession();
  
//  onSessionValid({
//	  user_id: '1111',
//	  name: 'John Smith'
//  });
}

function onSessionValid(result) {
  user_id = result.user_id;
  user_fullname = result.name;
	  
  var loginForm = $('login-form');
  var restaurantNav = $('restaurant-nav');
  var restaurantList = $('restaurant-list');
  var avatar = $('avatar');
  var welcomeMsg = $('welcome-msg');
  var logoutBtn = $('logout-link');
  
  welcomeMsg.innerHTML = 'Welcome, ' +  user_fullname;

  showElement(restaurantNav);
  showElement(restaurantList);
  showElement(avatar);
  showElement(welcomeMsg);
  showElement(logoutBtn, 'inline-block');
  hideElement(loginForm);

  initGeoLocation();
}