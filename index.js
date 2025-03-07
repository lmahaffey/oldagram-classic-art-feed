const postSection=document.querySelector('.post');
const allPosts=document.querySelectorAll(".container")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function listElements(){
    for(let i=0; i<posts.length;i++){
        postSection.innerHTML+= `<div class="container">
        <article class="info">
            <img src="${posts[i].avatar}" alt="User avatar picture">
            <div class="name-location">
                <a href="#" class="drk">${posts[i].name}</a>
                <p> ${posts[i].location}</p>
            </div>
        </article>
        <figure class="post-picture">
         <a class="post-pic"><img src="${posts[i].post}" alt="User post picture" ></a> 
        </figure>
    
        <div class="interaction">
            <div class="reaction">
                <a href="#" class="heart-bg"><img src="images/icon-heart.png" alt="Like the post"></a>
                <a href="#"> <img src="images/icon-comment.png" alt="Add comment to the post"></a>
                <a href="#"> <img src="images/icon-dm.png" alt="DM to the"></a>
    
            </div>
    
            <div class="like-count">
                <a href="#" class="drk comment-count">
                    ${posts[i].likes} likes
                </a>
            </div>
    
            <div class="comment">
                <a href="#" class="drk">${posts[i].username}</a>
                <p>${posts[i].comment} </p>
            </div>
    
        </div>
        </div>`
    }
}

listElements()

const likeCounts=document.querySelectorAll(".comment-count")
const postPics=document.querySelectorAll('.post-pic');

postPics.forEach((postPic, index)=>{
    postPic.addEventListener("click",function(){
     let currentCount=parseInt(likeCounts[index].textContent);
     currentCount++;
     likeCounts[index].textContent=`${currentCount} likes`;
    })
 })
