
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    canvas = createCanvas(700,400);
    canvas.position(60,180)
    video=createCapture(VIDEO);
    video.position(760, 180);
    video.size(400, 300);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotPoses);
}
function modelloaded(){
    console.log ("poseNet is Initialized");}
function gotPoses(results){
    if(results.length > 0){
    console.log(results)
  
    rightwristX= results[0].pose.rightWrist.x;
    leftwristX= results[0].pose.leftWrist.x;
    difference= floor(leftwristX - rightwristX);
}}

function draw(){
background("#FFC0CB");
textSize(difference);
fill('#ADD8E6');
text('Anwesha', 50, 250);
}