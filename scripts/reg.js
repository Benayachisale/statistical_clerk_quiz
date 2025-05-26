const button = document.getElementById("btn");
const db={
    name:null,
    currentQuestion:0
}
function register() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    
    // Regex explanation:
    // ^[A-Za-z ]+$ - Only letters and spaces
    // .{5,}        - At least 5 characters long
    const nameRegex = /^[A-Za-z ]{5,}$/;
    
    if (!nameRegex.test(name)) {
       // alert("Please enter a valid name:\n- At least 5 characters\n- Letters only\n- No numbers or symbols");
       renderWrong()
        nameInput.focus();
        
    
    }else{
    
    // If validation passes
    db.name=name
    localStorage.setItem('database',JSON.stringify(db))
    window.location.href="index.html"
    
    }
}

// Add event listener
button.addEventListener("click", register);
function renderWrong(){
    //clearing inside
    const feedbackDiv=document.getElementById('feedback')
    feedbackDiv.innerHTML="";
    const info=document.createElement('div')
    info.className="alert alert-danger text-center text-danger m-1"
    info.innerHTML="Please enter a valid name:<br> - At least 5 characters<br>- Letters only<br> - No numbers or symbols";

    feedbackDiv.appendChild(info)
}
