const cookieArr = document.cookie.split('=');
const cookieId = cookieArr[1];
const cardContainer = document.getElementById('content');

const APIUrl = 'https://fakestoreapi.com/products';

const xhr = new XMLHttpRequest();
xhr.open('GET', APIUrl);
xhr.send();
xhr.onload=()=>{
    const parsedXhr = JSON.parse(xhr.response);

    parsedXhr.forEach((element)=>{
        if(element.id == cookieId){
            
            const cardDiv = document.createElement('div');
            const cardList = cardDiv.classList;
            cardList.add("card");
            cardContainer.appendChild(cardDiv);
            const imageDiv = document.createElement('div');
            const imgList = imageDiv.classList;
            imgList.add("image");
            cardDiv.appendChild(imageDiv);
            const imageElement = document.createElement('img');
            imageElement.setAttribute("src", element.image);
            imageElement.setAttribute("width", "300");
            imageDiv.appendChild(imageElement);
            const infoDiv = document.createElement('div');
            const infoList = infoDiv.classList;
            infoList.add("info");
            cardDiv.appendChild(infoDiv);
            const infoTitle = document.createElement('h3');
            infoTitle.innerHTML = element.title;

            infoDiv.appendChild(infoTitle);
            const descrP = document.createElement('p');

            descrP.innerHTML = "<b>Description: </b><br>" + element.description;
            infoDiv.appendChild(descrP);
            const category = document.createElement('p');

            category.innerHTML = `<i>Category:  ${element.category}</i>`;
            infoDiv.appendChild(category);
            const priceDiv = document.createElement('div');
            priceDiv.setAttribute('style', 'text-align: center')
            const price = document.createElement('span');
            price.innerHTML = '$ ' + element.price;
            
            priceDiv.appendChild(price);
            cardDiv.appendChild(priceDiv);
            const rateStar = document.createElement('div');
            const ratingList = rateStar.classList;
            ratingList.add("ratingStars");
            infoDiv.appendChild(rateStar);
            const rateBox = document.createElement('div');
            const rateStar1 = document.createElement('span');
            const rateStar2 = document.createElement('span');
            const rateStar3 = document.createElement('span');
            const rateStar4 = document.createElement('span');
            const rateStar5 = document.createElement('span');
            const ratingValue = document.createElement('span');
            ratingValue.setAttribute('style', 'color:black');
            ratingValue.innerHTML = " " +element.rating.rate+" (" + element.rating.count+ ")";
            const list1 = rateStar1.classList;
            const list2 = rateStar2.classList;
            const list3 = rateStar3.classList;
            const list4 = rateStar4.classList;
            const list5 = rateStar5.classList;
            list1.add("fa");
            list2.add("fa");
            list3.add("fa");
            list4.add("fa");
            list5.add("fa");
            list1.add("fa-star");
            list2.add("fa-star");
            list3.add("fa-star");
            list4.add("fa-star");
            list5.add("fa-star");
            cardDiv.appendChild(rateBox);
            const rateBoxClass = rateBox.classList;
            rateBoxClass.add('ratingStars');
            
            if(element.rating.rate>=1 && element.rating.rate<2)
            {
                rateBox.appendChild(rateStar1);
                rateBox.appendChild(ratingValue);
            } else if(element.rating.rate>=2 && element.rating.rate<3)
            {
                rateBox.appendChild(rateStar1);
                rateBox.appendChild(rateStar2);
                rateBox.appendChild(ratingValue);
            } else if(element.rating.rate>=3 && element.rating.rate<4)
            {
                rateBox.appendChild(rateStar1);
                rateBox.appendChild(rateStar2);
                rateBox.appendChild(rateStar3);
                rateBox.appendChild(ratingValue);
            } else if(element.rating.rate>=4 && element.rating.rate<5)
            {
                rateBox.appendChild(rateStar1);
                rateBox.appendChild(rateStar2);
                rateBox.appendChild(rateStar3);
                rateBox.appendChild(rateStar4);
                rateBox.appendChild(ratingValue);
            } else 
            {
                rateBox.appendChild(rateStar1);
                rateBox.appendChild(rateStar2);
                rateBox.appendChild(rateStar3);
                rateBox.appendChild(rateStar4);
                rateBox.appendChild(rateStar5); 
                rateBox.appendChild(ratingValue);
        }
        
        }
        
    })
}

