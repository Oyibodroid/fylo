const type = document.querySelector("#userinput");
const submitBtn = document.querySelector("#send");
const chatbox = document.querySelector("#chatbox");

const botBtn = document.querySelector("#chatimg");

function create() {
  document.createElement("div");
}

type.addEventListener("submit", function (e) {
  e.preventDefault();
});

console.log(type);

function sent() {
  // if (()) {
  const msg = document.createElement("p");
  const msgCont = document.createElement("div");
  let userText = document.querySelector("#usertext");
  if (document.querySelector("#usertext").value.length !== 0) {
    chatbox.appendChild(msgCont);
    msg.innerText = userText.value;
    msgCont.appendChild(msg);
    msgCont.classList.add("usermsg");
    msgCont.classList.add("msg");

    document.querySelector("#usertext").value = " ";
  } else {
    return false;
  }
  // }
  // sent();
  console.log(userText.value);
}

botBtn.addEventListener("click", function (e) {
  chatbox.classList.toggle("show");
  botBtn.querySelector("span").style.background = "green";
  botBtn.querySelector("span").innerText = " ";
});

