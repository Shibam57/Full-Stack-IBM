// let sideBar=document.getElementById('side-bar');
// let container=document.querySelector('.container')
// sideBar.addEventListener('click',()=>{
//     let sideSmallMenu=document.querySelector('.side-small-menu');

//     if(sideSmallMenu.style.left==='0px'){
//         sideSmallMenu.style.left='-250px';
//         container.style.paddingLeft='0px';
//     }
//     else{
//         sideSmallMenu.style.left='0px';
//         container.style.paddingLeft='250px'
//     }
// })

// let searchInput=document.getElementById('search-input');

// searchInput.addEventListener('click',()=>{
//     let searchBar=document.querySelector('.search-bar');
//     if(searchBar.style.paddingLeft==='0px'){
//         searchBar.style.paddingLeft='50px';
//     }
//     else{
//         searchBar.style.paddingLeft='0px';
//     }
// })

// api call


let API_KEY = "AIzaSyBfLvHjECXVzR4IyK9Wlom65Yz8I0S5ias";
let search_term = document.getElementById("query").value || "university";
let videoContainer=document.getElementById("video-data");
async function getData() {
  try {
    let data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`
    );
    let response = await data.json();
    console.log(data);
    console.log(response.items);
    showVideoCards(response.items);
  } catch (error) {
    console.log(error);
  }
}
getData();

async function showVideoCards(array) {
    console.log(array)
    array.forEach(({snippet, id:{videoId}}) => {
        let videoBox=document.createElement("div");
        videoBox.className="videos"
        // videoBox.style.width='20%'
        videoBox.style.border='1px solid #000'

        let img=document.createElement('img');
        img.src=snippet.thumbnails.medium.url

        let title=document.createElement("p");
        title.innerText=snippet.channelTitle;

        let channel_title=document.createElement("p");
        channel_title.innerText=snippet.title;

        videoBox.append(img, title, channel_title);
        videoContainer.append(videoBox);

        videoBox.onclick=((snippet,id)=>{
            let data={
                snippet,id
            }
            localStorage.setItem("video",JSON.stringify(data));
            window.location.href="video.html";
        })
    });
}

{
  /* <iframe width="914" height="514" src="https://www.youtube.com/embed/6Vx6jmgmBn0" title="How to setup a vite-react-tailwind project and make it a template repo." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}
