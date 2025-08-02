const card = document.querySelector(".profileCard");
const hide = document.querySelector(".first-body");
const link = document.querySelector(".link");
const id = document.querySelector(".id");
const updateddate = document.querySelector(".updatedDate");
const createddate = document.querySelector(".createdDate");
const bioData = document.querySelector(".bio");
const repo = document.querySelector(".repo");
const following = document.querySelector(".following");
const username = document.querySelector(".userName");
const followers = document.querySelector(".followers")  ;
const companyname = document.querySelector(".companyName");
const map = document.querySelector(".location");
const show = document.querySelector(".showData");
const profilename = document.querySelector(".profileName")
 const submit = document.getElementById("submit");
const loadingSpinner = document.getElementById("loading-spinner");
const image = document.getElementById("photo");
document.addEventListener("keydown", (press) => {
    const key = press.key;
    if (key === "Enter") {
        submit.click();
    }
})  
submit.addEventListener( "click",(event) =>
{
    let userinput = document.querySelector("#user-input").value;
    loadingSpinner.style.display = 'block';
    async function GithubProfileInfo(userinput)
{
    const GithubfetchApi = await fetch(`https://api.github.com/users/${userinput}`);
    const profilebody = await GithubfetchApi.json()
    show.style.color = "red" ;
    
    if(profilebody.message == "Not Found")
    {
        setTimeout(() =>
            {
                show.style.display = 'none';
                show.textContent ="User Not Found (Try Again)";
                
                loadingSpinner.style.display = 'block';
                if(show.textContent === "User Not Found (Try Again)")
                {
                    show.style.display = 'block';
                    loadingSpinner.style.display = 'none';
                }
                
            },2000)
    }
    else if(profilebody.message == "API rate limit exceeded for 14.192.132.240. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)")
        {
            setTimeout(() =>
                {
                    show.style.display = 'none';
                    show.textContent ="Api Limit Exceeded";
                    
                    loadingSpinner.style.display = 'block';
                    if(show.textContent === "Api Limit Exceeded")
                    {
                        show.style.display = 'block';
                        loadingSpinner.style.display = 'none';
                    }
                    
                },2000)
        }
   
    else
    {
        id.textContent = `ID: ${profilebody.id}`;
        createddate.textContent = profilebody.created_at;
        updateddate.textContent = profilebody.updated_at;
        link.textContent = profilebody.html_url;
        repo.textContent = profilebody.public_repos;
        bioData.textContent = profilebody.bio;
        following.textContent = profilebody.following;
        username.textContent = profilebody.name;
        followers.textContent = profilebody.followers;
        companyname.textContent = profilebody.company;
        map.textContent = profilebody.location; 
        profilename.textContent= profilebody.login;
        profilename.style.textDecoration = "underline";
        card.style.display = "block";
        hide.style.display = "none";
        image.src = profilebody.avatar_url;
        show.style.display = 'none';
        loadingSpinner.style.display = 'none';
    }
    link.setAttribute("href", profilebody.html_url); 
}

GithubProfileInfo(userinput)
})
