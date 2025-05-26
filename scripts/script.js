//local database
const db=JSON.parse(localStorage.getItem('database'))||{
    name:null,
    currentQuestion:5
}


//redirectiom
if(!db.name)
window.location.href="welcome.html";
//console.log(db.currentQuestion)
// Get DOM elements
  const feedbackDiv=document.getElementById('feedback');

const questionDiv = document.getElementById('question');
const questionsDiv = document.getElementById('questions'); // Assuming "questions" was meant
const submitButton = document.getElementById('submit');
let current =db.currentQuestion??0; // Tracks the current question index

// Function to render the current question and options
function renderQuestion() {
  const item = data[current];
  questionDiv.innerHTML = `<h2 class="bold">${item.question}</h2>`;
  questionsDiv.innerHTML = ''; // Clear previous options
  const isMultiple = item.answer.includes(','); // Check if multiple answers are correct

  item.answers.forEach((ans, index) => {
    const div = document.createElement('div');
    div.className = 'form-check'; // Bootstrap class for form inputs
    const input = document.createElement('input');
    input.className = 'form-check-input';
    input.type = isMultiple ? 'checkbox' : 'radio';
    if (!isMultiple) input.name = 'answer'; // Group radio buttons
    input.value = ans[0]; // Use the option letter (e.g., 'A', 'a') as the value
    input.id = `option${index}`; // Unique ID for accessibility
    const label = document.createElement('label');
    label.className = 'form-check-label';
    label.htmlFor = `option${index}`;
    label.textContent = ans; // Display full answer text
    div.appendChild(input);
    div.appendChild(label);
    questionsDiv.appendChild(div);
  });
}

// Function to check the user's answer
function checkAnswer() {
    
  const item = data[current];
  const isMultiple = item.answer.includes(',');

  if (isMultiple) {
    // Handle multiple-choice questions
    const selected = Array.from(questionsDiv.querySelectorAll('input[type="checkbox"]:checked'))
      .map(input => input.value);
    const correctAnswers = item.answer.split(',').map(s => s.trim());
    const isCorrect = selected.length === correctAnswers.length && 
                      selected.every(val => correctAnswers.includes(val));

    if (isCorrect) {
     // alert('Correct!');
     renderCorrect()
     setTimeout(function() {
               current++;
               renderQuestion()
             feedbackDiv.innerHTML=""
     }, 3000);
      if (current < data.length) {
        renderQuestion();
      } else {
    //    alert('Quiz completed!');
      }
    } else {
        renderWrong()
           setTimeout(function() {
             feedbackDiv.innerHTML=""
     }, 3000);

    }
  } else {
    // Handle single-choice questions
    const selected = questionsDiv.querySelector('input[type="radio"]:checked');
    if (selected && selected.value === item.answer[0]) {
     // alert('Correct!');
     renderCorrect()
     db.currentQuestion++;
     localStorage.setItem('database',JSON.stringify(db))
     setTimeout(function() {
               current++;
               renderQuestion()
             feedbackDiv.innerHTML=""
     }, 3000);

      if (current < data.length) {
        renderQuestion();
      } else {
        alert('Quiz completed!');
      }
    } else {
      //alert('Incorrect, try again.');
      renderWrong()
     setTimeout(function() {
              // current++;
             feedbackDiv.innerHTML=""
     }, 3000);

    }
  }
  initialize()
  updateProgress()
}

// Add event listener to the submit button
submitButton.addEventListener('click', checkAnswer);

// Load the first question when the page loads
renderQuestion();

//functions
function renderCorrect(){
    //clearing inside
    feedbackDiv.innerHTML="";
    const info=document.createElement('div')
    info.className="alert alert-success text-center text-success m-1"
    info.textContent="Well done!Your answer is correct!";
    feedbackDiv.appendChild(info)
}

function renderWrong(){
    //clearing inside
    feedbackDiv.innerHTML="";
    const info=document.createElement('div')
    info.className="alert alert-danger text-center text-danger m-1"
    info.textContent="Your answer is Incorrect!";
    feedbackDiv.appendChild(info)
}

function initialize(){
    if(db.name){
        document.getElementById("name").textContent=db.name;
        document.getElementById("progress").textContent=db.currentQuestion;
        
    }else{
        //redirections
        document.getElementById("name").textContent="unknown"
      document.getElementById("progress").textContent=null;
 

    }
}
initialize()

const resetBtn=document.getElementById('reset');
resetBtn.addEventListener('click',()=>{
    localStorage.removeItem('database')
    window.location.reload()
})

//progress bar
const bar=document.getElementById('bar');
function updateProgress(){
    let total=data.length;
    let percentage=Math.round((current/total)*100);
    console.log(percentage)
    
    bar.style.width=percentage
}

updateProgress()