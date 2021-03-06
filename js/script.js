var videoHeight = 480;
var videoWidth = 640;

function triggerPredictions(predictions){
  if(predictions.length > 0){
    const elem = document.querySelector("#parallax");
    let _w = videoWidth/2;
    let _h = videoHeight/2;
    let _mouseX = videoWidth - predictions[0].landmarks[3][0];
    let _mouseY = videoHeight - predictions[0].landmarks[3][1];
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
}


