song1 ="";
song2 = "";

function preload()
{
    song1 = loadSound("Ed Sheeran - Shape of You(Mr-Jatt1.com).mp3");
    song2 = loadSound("Illegal Weapon 2.0 - Street Dancer 3D 128 Kbps.mp3");

}

function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    
}