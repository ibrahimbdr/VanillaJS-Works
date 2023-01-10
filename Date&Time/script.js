

function ShowDate()
{
    const TSpace = document.getElementById("TimeSpace");
    const d = new Date();

    let T = d.toLocaleTimeString();

    TSpace.textContent = T;
    setInterval(ShowDate, 1000)
    

    const DSpace = document.getElementById("DateSpace");
    const D = d.toLocaleDateString();
    DSpace.textContent = D

}

function displayCard()
{
    const cardContainer = document.getElementById("container");
    if(cardContainer.style.visibility == "hidden")
    {
        cardContainer.style.visibility = "visible";
        cardContainer.style.height = "300px";
    }
    else
    {
        cardContainer.style.visibility = "hidden";
        setTimeout(()=>{cardContainer.style.height = "0px"}, 600)    }
}

