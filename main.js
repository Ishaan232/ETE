p1="";
p2="";
Webcam.set({
     width:350,
     height:300,
      image_format : 'png',
       png_quality:90 
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function RABBIT(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
    }
    console.log("machine learning version 5 is loaded",ml5.version);
    x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WvVOE0XnD/model.json',model_loaded);
    function model_loaded(){
        console.log("model_loaded");
    }
    function speak(){
      siiav=window.speechSynthesis;
      speakone="The first prediction is"+p1;
      speaktwo="The second prediction is"+p2;
      var utterThis = new SpeechSynthesisUtterance(speakone + speaktwo);
      siiav.speak(utterThis);
    }
    function GHOST(){
      siiacv=document.getElementById("captured_image");
      x.classify(siiacv,afnoyc);
    }
    function afnoyc(error,result){
if (error){
    console.log(error);
}
else{
    console.log(result);
    p1=result[0].label;
    p2=result[1].label;
    speak();   
   document.getElementById("result_emotion_name").innerHTML=result[0].label;
   document.getElementById("result_emotion_name2").innerHTML=result[1].label;
   if(result[0].label=="Great"){
       document.getElementById("128039").innerHTML="&#9996;";
   }
   if(result[0].label=="Amazing"){
       document.getElementById("128039").innerHTML="&#128406;";
   }
   if(result[0].label=="OK"){
       document.getElementById("128039").innerHTML="&#128076;";
   }
   if(result[0].label=="Vulcan Salute"){
    document.getElementById("128039").innerHTML="&#128406;";
}
   if(result[1].label=="Great"){
       document.getElementById("129413").innerHTML="&#9996;";
   }
   if(result[1].label=="Amazing"){
       document.getElementById("129413").innerHTML="&#128406;";
   }
   if(result[1].label=="OK"){
       document.getElementById("129413").innerHTML="&#128076;";
   }
   if(result[1].label=="Vulcan Salute"){
    document.getElementById("129413").innerHTML="&#128406;";
}
}
    }