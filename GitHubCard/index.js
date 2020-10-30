/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//Importing axios and my Github
import axios from "axios";
axios
.get("https://api.github.com/users/loustevenshere")
.then((myGithub) => {
  const gitHubCardData = myGithub.data
  const addCard = cardMaker(gitHubCardData);
  cards.appendChild(addCard);
  console.log("addCard", addCard)
  console.log(addCard.name)
})
.catch(() => {
  console.log("error with Axios request")
});
    


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

      //Looks Good!
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// axios
// .get("https://api.github.com/users/loustevenshere")
// .then((myGithub) => {
//     cards.appendChild(myGithub)
// }); 



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

followersArray.map(item => {
  axios.get()
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
const cards = document.querySelector(".cards")
function cardMaker({avatar_url,login,location,twitter_username,url,followers,following}) {
  //instantiating the elements
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location1 = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const followers1 = document.createElement("p");
  const following1 = document.createElement("p");
  const bio = document.createElement("p");

  //creating the heirarchy
  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location1)
  cardInfo.appendChild(profile)
  profile.appendChild(address)
  cardInfo.appendChild(followers1)
  cardInfo.appendChild(following1)
  cardInfo.appendChild(bio)

  //css handlers
  card.classList.add("card")
  cardInfo.classList.add("card-info")
  name.classList.add("name")
  username.classList.add("username")

  // add text content 
  // image.src = obj.avatar_url
  // name.textContent = obj.login
  // username.textContent = obj.login
  // location1.textContent = obj.location1
  // profile.textContent = obj.profile
  // address.textContent = obj.address
  // followers.textContent = obj.followers
  // following.textContent = obj.following
  // bio.textContent = obj.bio

  image.src = avatar_url
  name.textContent = login
  location1.textContent = location
  profile.textContent = twitter_username
  address.href = url
  followers1.textContent = `Followers: ${followers}`
  following1.textContent = `Following: ${following}`


  
return card;
}

// function gitHubGrab(link) {
// }

// axios.get("https://api.github.com/users/loustevenshere")
// .then((res) => {
//   const githHubCardData = res.data
//   console.log(res.data
//   const addCard = cardMaker(githHubCardData);
//   cards.appendChild(addCard);
//   console.log("addCard", addCard)
// })
// .catch(() => {
//   console.log("error with Axios request")
// });


// console.log(gitHubGrab("https://api.github.com/users/loustevenshere"))

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// axios
// .get("https://api.github.com/users/loustevenshere")
// .then((myGithub) => {
//     cards.appendChild(myGithub)
// }); 



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
