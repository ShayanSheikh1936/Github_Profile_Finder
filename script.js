

const show = document.querySelector(".showData")
 const submit = document.getElementById("submit");
const loadingSpinner = document.getElementById("loading-spinner");
const image = document.getElementById("photo");
submit.addEventListener( "click",(event) =>
{
    let userinput = document.querySelector("#user-input").value;
    loadingSpinner.style.display = 'block';
    async function GithubProfileInfo(userinput)
{
    const GithubfetchApi = await fetch(`https://api.github.com/users/${userinput}`);
    const profilebody = await GithubfetchApi.json()
    show.textContent =userinput;
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
        // else if(profilebody.TypeError ==="Failed to fetch at GithubProfileInfo")
        // {   
        //     show.style.display = 'block';
        //     show.textContent = "check";
        //     loadingSpinner.style.display = 'none';
        // }
    else
    {
        
        console.log(profilebody.avatar_url);
        window.location.href = `profilecard.html?username=${userinput}`;
        show.style.display = 'none';
        loadingSpinner.style.display = 'none';
    }
    image.src = profilebody.avatar_url;
    
}
GithubProfileInfo(userinput)
})

