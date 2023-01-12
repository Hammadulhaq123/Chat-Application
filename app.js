const youMsg = document.querySelectorAll('div')[4];
youMsg.style.display = "none";

// let otherMsg = document.querySelectorAll('div')[3];
// otherMsg.style.display = "none"

function sendFunction() {
    const youChat = document.querySelectorAll('div')[3];
    youChat.style.display = "flex"
    // let otherChat = document.querySelectorAll('div')[4];
    // otherChat.style.display = "flex"
    const text = document.getElementById('textarea').value;
    const div = document.createElement('div');
    div.innerHTML = `${text}`;
    div.setAttribute("class" , "you");
    youChat.appendChild(div);
    document.getElementById('textarea').value = "";
}

const input = document.getElementById("textarea");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-btn").click();
  }
});