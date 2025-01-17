// toggling up down icon

const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

// to send feedback

function sendFeedback() {
    let send = document.getElementById("send");
    let feedback = document.getElementById("feedback");
    
    if (send.innerHTML === "send feedback here: ") {
        send.innerHTML = "sent! thank you for your support."; 
        feedback.value = "";
    }
    
    setTimeout(() => {
        send.innerHTML = "send more feedback here: ";
        feedback.value = "feedback...";
    }, 5000);
}
