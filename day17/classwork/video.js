let videoContainer=document.getElementById("video");

let data=JSON.parse(localStorage.getItem('videoData'));

let videoId=data.id.videoId

async function showData(videoId){
    let box=Document.createElement("div");

    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}`

    iframe.height="400px"
    iframe.width="80%"
    iframe.setAttribute("allowfullscreen",true)

    let title=document.createElement("p");
        title.innerText=snippet.channelTitle;

        let channel_title=document.createElement("p");
        channel_title.innerText=snippet.title;

    box.append(iframe);
    videoContainer.append(box);
}

showData(videoId);