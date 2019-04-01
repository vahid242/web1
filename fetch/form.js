var url = "https://randomuser.me/api/";
var btn =  document.querySelector("#btn");
var fullNameDis =  document.querySelector("#fullname");
var userNameDis =  document.querySelector("#username");
var emailDis =  document.querySelector("#email");
var cityDis =  document.querySelector("#city");
var picDis =  document.querySelector("#avatar");

btn.addEventListener("click", function(){

  fetch(url)
  .then(handleErrors)
  .then(parsJson)
  .then(updateProfile)
  .catch(function(err){
    console.log(err);
  })
})

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
    return res;
}

function parsJson(res){
  return res.json().then(function(data){
    return data.results[0];
  })
}

function updateProfile(res){
    var fullName = res.name.first + " " + res.name.last; 
    var photo = res.picture.medium;
    
    fullNameDis.innerText = fullName;
    userNameDis.innerText = res.login.username;
    emailDis.innerText = res.email;
    cityDis.innerText = res.location.city;
     picDis.src = photo;
    
  }