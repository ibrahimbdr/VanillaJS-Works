// 1./////////////////////////////////////////////////////////////////////////

const users = document.getElementById('usersContainer');
const container = document.getElementById('container');
const postContainer = document.getElementById('postsContainer');

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();
        usersData.forEach(user => {
        const userPill = document.createElement('button');
        userPill.classList.add('btn','text-light','rounded-pill','m-1');
        userPill.style.backgroundColor = '#552099';
        userPill.innerHTML = user.name;
        users.appendChild(userPill);
        userPill.addEventListener('click', async()=>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            const userPost = await res.json();
            console.log(userPost);
            postContainer.innerHTML = '';
            userPost.forEach(post=>{
            const postInnerContainer = document.createElement('div');
            postInnerContainer.classList.add('card','mt-2','shadow','p-3');
            postContainer.appendChild(postInnerContainer);
            const card = document.createElement('div');
            card.classList.add('card-body');
            postInnerContainer.appendChild(card);
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title','d-flex','justify-content-between');
            card.appendChild(titleDiv);
            const titleHeader = document.createElement('div');
            titleHeader.classList.add('user','d-flex','w-25','align-items-center');
            titleDiv.appendChild(titleHeader);
            const userImg = document.createElement('img');
            userImg.classList.add('card-img-top','w-25','mb-3');
            userImg.setAttribute('src','./user.png');
            titleHeader.appendChild(userImg);
            const titleUser = document.createElement('h5');
            titleUser.classList.add('card-title','ms-2');
            titleUser.innerHTML = user.name
            titleHeader.appendChild(titleUser);
            const postTime = document.createElement('span');
            postTime.style.color='silver';
            postTime.innerHTML = '1 min';
            titleDiv.appendChild(postTime);
            const breakLine = document.createElement('hr');
            card.appendChild(breakLine);
            const postTitle = document.createElement('p');
            postTitle.classList.add('card-text','fw-bolder', 'text-center');
            postTitle.innerHTML = post.title;
            card.appendChild(postTitle);
            const postContent = document.createElement('p');
            postContent.classList.add('card-text');
            postContent.innerHTML = post.body;
            card.appendChild(postContent);
            })
        })
    });
    }
    catch (e) {
        console.log(e.message);
    }
}

getUsers()