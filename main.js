NoseX = 0;
NoseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(782,550);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX = "+NoseX+"NoseY="+NoseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+leftWristX+"rightWristX"+rightWristX+"difference"+difference);
    }
}

function draw() {
    document.getElementById("square_side").innerHTML = "width and height of the square is = "+difference+"px";
    background('#F08080');
    fill("#C0E6F0")
    stroke("#C0E6F0")
    square(NoseX,NoseY,difference)
}

function modelLoaded() {
    console.log("PoseNet has been initialized!");
}

