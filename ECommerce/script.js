const cardContainer = document.getElementById('content');
let ItemCounter = document.getElementById('ItemNumbers');
let counter =0;

const APIUrl = 'https://fakestoreapi.com/products';

const xhr = new XMLHttpRequest();
xhr.open('GET', APIUrl);
xhr.send();
xhr.onload=()=>{
    const parsedXhr = JSON.parse(xhr.response);

    parsedXhr.forEach((element)=>{
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
        imageElement.setAttribute("height", "150px");
        imageDiv.appendChild(imageElement);

        const infoDiv = document.createElement('div');
        const infoList = infoDiv.classList;
        infoList.add("info");
        cardDiv.appendChild(infoDiv);
        const infoTitle = document.createElement('h3');
        infoTitle.innerHTML = element.title;
        const infoTitleList = infoTitle.classList;
        infoTitleList.add("pfont");
        infoDiv.appendChild(infoTitle);
        // const descrP = document.createElement('p');
        // const descripList = descrP.classList;
        // descripList.add("pfont");
        // descrP.innerHTML = element.description;
        // infoDiv.appendChild(descrP);
        const category = document.createElement('p');
        const categoryclassList = category.classList;
        categoryclassList.add("cfont");
        category.innerHTML = 'Category: '+ element.category;
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
        ratingValue.innerHTML = " " +element.rating.rate;
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

        const addToCardBtnDiv = document.createElement('div');
        const cardBtnList = addToCardBtnDiv.classList;
        cardBtnList.add("addtocardbtn");
        const addToCardBtnDivVert = document.createElement('div');
        const cardBtnVertList = addToCardBtnDivVert.classList;
        cardBtnVertList.add("btnVerticalCenter");
        const addToCardBtn = document.createElement('button');
        addToCardBtn.setAttribute('name', element.id)
        const btnClassList = addToCardBtn.classList;
        btnClassList.add("btn-add");
        addToCardBtn.innerHTML = "ADD TO CARD";
        addToCardBtnDiv.appendChild(addToCardBtnDivVert);
        addToCardBtnDivVert.appendChild(addToCardBtn);      
        cardDiv.appendChild(addToCardBtnDiv);   
        
        
        addToCardBtn.addEventListener('click', (event)=>{
            console.log(element.id);
            counter++;
            //ItemCounter.textContent = counter;
            localStorage.setItem(element.id, 'id');
            localStorage.setItem("item:"+counter, element.id);
            event.stopPropagation();
            location.reload();
        })
        
        ItemCounter.textContent = localStorage.length;

        cardDiv.addEventListener('click', (event)=>{
            document.cookie = "id=" + element.id;
            window.open('ItemInfo.html');        
        })

        });

        
 
        }
        
        

