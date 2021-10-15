nosex=0;
nosey=0;
rightwrist=0;
leftwrist=0;
diffrence=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

canvas=createCanvas(550,550)
canvas.position(560,130);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",getposes);
}
function modelloaded(){
    console.log("posenetstarted");
}
function getposes(results){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
leftwrist=results[0].pose.leftWrist.x;
rightwrist=results[0].pose.rightWrist.x;
diffrence=floor(leftwrist-rightwrist);
}
function draw(){
    background('#969A97');
    document.getElementById("squareside").innerHTML="Size Of the Square Is "+diffrence+"px";
    fill("red");
    stroke("red");
    square(nosex,nosey,diffrence);
}


