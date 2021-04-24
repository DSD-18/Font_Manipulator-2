function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(550,80);

    poseNet = ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background('#0000FF');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}