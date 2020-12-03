import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios
// .get("https://api.github.com/users/loustevenshere")
// .then(res => {
//   console.log('success', res)
// })
// .catch(err => {
//   console.log('error', err)
// })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
axios
.get("https://api.github.com/users/loustevenshere")
.then(res => {
  console.log('success', res)
  const gitCard = cardMaker(res.data)
  console.log(gitCard);
  cards.appendChild(gitCard);
})
.catch(err => {
  console.log('error', err)
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const followersArray = 
[ 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
]


followersArray.forEach(gitUser => {
  axios
  .get(`https://api.github.com/users/${gitUser}`)
  .then(res => {
    console.log('success', res)
    const gitCard = cardMaker(res.data)
    console.log(gitCard);
    cards.appendChild(gitCard);
  })
  .catch(err => {
    console.log('error', err)
  })
  })


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cards = document.querySelector('.cards');
function cardMaker({avatar_url,login, name, location, html_url, followers, following, bio}) {
  //Creating the dom elements
  const card = document.createElement('div');
  const gitImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const gitaddress = document.createElement('a');
  const gitFollowers = document.createElement('p');
  const gitFollowing = document.createElement('p');
  const gitBio = document.createElement('p');

  //Creating the hierarchy
  // cards.appendChild(card);
  card.appendChild(gitImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(usersName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(gitaddress);
  cardInfo.appendChild(gitFollowers);
  cardInfo.appendChild(gitFollowing);
  cardInfo.appendChild(gitBio);

  //Class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  userName.classList.add('username');

//Content
gitImg.src = avatar_url;
usersName.textContent = name;
userName.textContent = login;
userLocation.textContent = location;
gitaddress.src = html_url;
gitFollowers.textContent = `Followers: ${followers}`;
gitFollowing.textContent = `Following: ${following}`;
gitBio.textContent = `Bio: ${bio}`;

return card;

}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
