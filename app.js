let youMsg = document.querySelectorAll('div')[4];
youMsg.style.display = "none";
// let otherMsg = document.querySelectorAll('div')[3];
// otherMsg.style.display = "none"

function sendFunction(){
    let youChat = document.querySelectorAll('div')[3];
    youChat.style.display = "flex"
    let otherChat = document.querySelectorAll('div')[4];
    otherChat.style.display = "flex"
    let text = document.getElementById('textarea').value;
    let div = document.createElement('div');
    div.innerHTML = `${text}`;
    div.setAttribute("class" , "you");
    youChat.appendChild(div);
    text = document.getElementById('textarea').value = "";
}

var input = document.getElementById("textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-btn").click();
  }
});