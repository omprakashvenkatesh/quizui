//fetch js data to html athukaaga
var question = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")


//options da boy grid box id;
var num1 =  document.getElementById('num1')
var num2 =  document.getElementById('num2')
var num3 =  document.getElementById('num3')
var num4 =  document.getElementById('num4')
var num5 =  document.getElementById('num5')
var num6 =  document.getElementById('num6')
//buttons da boy
var btnprevious = document.getElementById('btnprev')
var btnnext = document.getElementById('btnnext')

//container hide for completion da bro
var container1 = document.getElementById('container1')

// data2 voda h2 completed id//
var completed = document.getElementById('completed-tag')



//currentquestion oda index-number
var currentQuestion = 0;
var totalQues = questions.length;
var score = 0;




//intital function
function StartQuiz(index){
    //question.js lendhu data vaangurathukku
    var data = questions[index]
    question.textContent = (index + 1) + ". " + data.question
    option1.textContent = data.option1
    option2.textContent = data.option2
    option3.textContent = data.option3
    option4.textContent = data.option4
    var selectedOption = document.querySelector('#container-1 input[type=radio]:checked')
    
    //data checked irunthaa false panni vidum
    if (selectedOption !== null) {
        selectedOption.checked = false;
    }
}
StartQuiz(currentQuestion)
 

//grid box data4
var numberlist=[num1,num2,num3,num4,num5,num6]
var numlength = numberlist.length
//grid box touch panrapo sheet aagurathukku
numberlist.forEach((numDiv,i) =>{
    numDiv.addEventListener('click',()=>{
    //last btn munnadi varaikum intha colour
    currentQuestion = i;
    btnnext.textContent = "Next"
    btnnext.style.backgroundColor ="black"
    btnnext.style.color ="white";
    //gridbox color change
    numDiv.textContent = i+1
    numDiv.style.backgroundColor ="black"
    numDiv.style.color ="white";
    numDiv.style.fontSize = "small"
    StartQuiz(currentQuestion)
    if(i == numlength-1){
    //last btn intha colour
    currentQuestion = i;
    btnnext.textContent = "Click to finish"
    btnnext.style.backgroundColor ="green"
    btnnext.style.color ="white";
     //gridbox color change
    numDiv.textContent = i + 1
    numDiv.style.backgroundColor ="black"
    numDiv.style.color ="white";
    numDiv.style.fontSize = "small"
    StartQuiz(currentQuestion)
    }
    })  
})








//grid box data 2
var num_div;
btnprevious.addEventListener("click",()=>{
    //prev button touch pannathum current question change aagum
    num_div = numberlist[currentQuestion]
    num_div.style.backgroundColor ="white"
    num_div.style.color ="black"
    num_div.style.fontSize = "small"  
    if(currentQuestion<0){
        btnprevious.style.disabled = true;
    }
    //decrement aaga
    if(currentQuestion>0){
        btnprevious.style.disabled = false;
        currentQuestion--;
        btnnext.textContent = "Next"
        btnnext.style.backgroundColor ="black"
        btnnext.style.color ="white";
        StartQuiz(currentQuestion) 
    } 
})






btnnext.addEventListener("click",function btn(){
    //radio button checked aa illayaa
    var selectedOption = document.querySelector('#container-1 input[type=radio]:checked')
    if(!selectedOption){
        alert("select any option")
        return;
    }
    
    if(currentQuestion<totalQues)

    {     
        //  prev button maathiri ,grid color change 
        num_div = numberlist[currentQuestion]
        num_div.style.backgroundColor ="black"
        num_div.style.color ="white"
        num_div.style.fontSize = "small"
        //score adding
        if(questions[currentQuestion].answeroption == selectedOption.value){
            score+=10;
        }
        currentQuestion++;
        StartQuiz(currentQuestion)  
    }
    
    //last  question
    if(currentQuestion == totalQues-1){
        btnnext.textContent = "Click to finish"
        btnnext.style.backgroundColor = "green"
        btnnext.style.color="white"
        
    }
    
    //score
    if(currentQuestion == totalQues){
        container1.style.display ="none"
        completed.textContent = "Completed yourscore " + score    
    }
   
}
)

//set time interval

//idss
var s = document.getElementById("seconds") 
var m = document.getElementById("minutes")
var h = document.getElementById("hours")


//let remainingTime = 3600; 



function quiztime() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;



  if (remainingTime > 0) {
    remainingTime--;
    h.textContent = "00"
    m.textContent = ":" + minutes
    s.textContent = ":" + seconds
    if(minutes<10){
    m.textContent = ":0" + minutes
    }
    if(seconds<10){
     s.textContent = ":0" + seconds
    }
}
  else {
    
    clearInterval(timerInterval);
    document.write("solamuththaaaa pochaaaa")
  }
}


//let timerInterval = setInterval(quiztime,1000);








