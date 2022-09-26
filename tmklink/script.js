let apitok = "TOKEN HERE";
let show = document.getElementById("link");
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!

    fetch(`https://tmklink.com/api?api=${apitok}&url=${url}`)
        .then(data => data.json())
        .then(linkData => {
            const linkText = linkData.shortenedUrl;
            
            if (linkData.status === "error") {
                show.innerHTML = url;
            }
            else {
                show.innerText = linkText;
            }

            

        });
});

let btnlink=document.getElementById("btn-link");
let cp=document.getElementById("cp");

cp.addEventListener("click",()=>{
    

    show.style.color="red";
    navigator.clipboard.writeText(show.innerText);
    
})






