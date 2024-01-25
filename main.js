x = 0;
y = 0;

screenWidth = 0;

screenHeight = 0;

drawApple = "";

apple = "";

toNumber = "";

speakData = "";

i = 1;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = 
    "A fala foi reconhecida: " + content; 

    to_number = Number(content);
    if(Number.isInteger(tonumber)) {
      
      document.getElementById("status").innerHTML = "A maçã começou a ser desenhada"; 
      drawApple = "set";
      
    }else{
      document.getElementById("status").innerHTML = "O número não foi reconhecido.";
    }

}

function setup() {
 
canvas = createCanvas(screenWidth, screenHeight-150);
canvas.position(0, 150);
}

function draw() {
  if(drawApple == "set" )
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";

  }

  for(var i =1; i <= to_number; i++)
  {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    Image(apple, x, y, 50, 50);
  }

  speakData = toNumber + " Maçãs desenhadas";
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";


}

function peroload(){
  apple = loadImage("https://i7.realpng.com/preview/1010/369/265/apple-clip-art-apple-png-vector-element.jpg");
}
