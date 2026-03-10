window.onload = getLiveVideo;

async function getLiveVideo() {//"async" is for waiting, it goes with "await"
  console.log("loaded");
  let video = document.getElementById("video");
  console.log(video.srcObject);

  try {// this is onbuilt tool to ask for data, it will go to catch clause automatically
    // // let stream = await navigator.mediaDevices.getUserMedia({
    // //   video: {width: 320,
    //     height: 240,}, //stream is the dtata coming from camera
    // // });
    let stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 320,
        height: 240,
      },
    });
    video.srcObject = stream;
    console.log(video.srcObject) //here there is something
  } catch (err) {
    /* handle the error */
    console.log("had an error getting the camera");
  }
}