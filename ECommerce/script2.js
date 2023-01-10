const cardContainer = document.getElementById('ShoppingSummary')

const APIUrl = 'https://fakestoreapi.com/products';
let count1 =  localStorage.length;

const cardItemCount = document.getElementById('cardItemsNo');
cardItemCount.innerHTML = count1;

const totPrice = document.getElementById('PriceinTotal');


let qty = 1;

// for(item in localStorage)
//     {
//         let c=0;
//         for(itm in localStorage)
//             {if(localStorage.getItem(item) == localStorage.getItem(itm)){
//                 c++;
//             }}
//         console.log(`Item No. ${localStorage.getItem(item)} repeated ${c} times`);
//     }

const xhr = new XMLHttpRequest();
xhr.open('GET', APIUrl);
xhr.send();
let cardItems=0;
xhr.onload=()=>{
    const parsedXhr = JSON.parse(xhr.response);
    let totalprice = 0;
    parsedXhr.forEach((element)=>
    {
        for(item in localStorage)
        {
            if(element.id == item)
            {
                // let count=0;
                // for(itm in localStorage)
                //     {if(localStorage.getItem(item) == localStorage.getItem(itm)){
                //         count++;
                //     }}
                //
                    qty = 0;
                    for(let i = 0; i < localStorage.length-1; i++)
                    {
                        
                        if(element.id == localStorage.getItem(localStorage.key(i+1)))
                        {
                            qty++;
                        }
                    };

                
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
                imageElement.setAttribute("width", "100px");
                imageDiv.appendChild(imageElement);
                const infoDiv = document.createElement('div');
                const infoList = infoDiv.classList;
                infoList.add("info");
                cardDiv.appendChild(infoDiv);

                const infoTitle = document.createElement('p');
                infoTitle.innerHTML = element.title;

                infoDiv.appendChild(infoTitle);

                const category = document.createElement('p');

                category.innerHTML = 'Category: '+ element.category;
                infoDiv.appendChild(category);

                const price = document.createElement('p');
                price.innerHTML = '$ ' + element.price;
                
                infoDiv.appendChild(price);
                totalprice+=element.price*qty;

                //
                const elementQtyCont = document.createElement('p');
                const elementQty = document.createElement('p');
                const qtyList = elementQty.classList;
                qtyList.add("qty");
                elementQty.innerHTML = "Qty: "+qty;//countInArray(arrayId, element.id);
                elementQtyCont.appendChild(elementQty);
                infoDiv.appendChild(elementQtyCont);
                //
                


                const deleteBtnDiv = document.createElement('div');
                const deleteBtn = document.createElement('a');
                deleteBtn.innerHTML = 'Delete this Item';
                const btnDelete = deleteBtn.classList;
                btnDelete.add('deleteButton');
                deleteBtnDiv.appendChild(deleteBtn);
                infoDiv.appendChild(deleteBtnDiv);
                

                deleteBtn.addEventListener('click', (event)=>{
                    
                    for(item in localStorage)
                    
                    {if(element.id == item){
                        localStorage.removeItem(item);
                    }
                    location.reload();
                }
                })

            }
        }
        
    })
    totPrice.innerHTML = '$ ' + Math.round((totalprice + Number.EPSILON) * 100) / 100;
    let localStorageItem = localStorage[0];
    console.log(localStorageItem);
    

}

// for(item in localStorage){if(item.substring(0,4)=='item'){console.log(item)}};

// for(let j = 0; j < localStorage.length; j++)
// {
//     for(let i = 0; i < localStorage.length; i++)
// {
//     let qty = 1;
//     if(localStorage.getItem(localStorage.key(j))==localStorage.key(i+1))
//     {
//         qty++;
//     }
// };
// }

function countInArray(array, element) {
    let repeat_count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            repeat_count++;
        }
    }
    return repeat_count;
}