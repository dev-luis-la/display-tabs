const button = document.getElementById('btn');
const videoElement = document.getElementById('video');


async function selectMedia(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }catch(error){
        console.log(error);
    }
}

button.addEventListener('click', async () =>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

selectMedia();