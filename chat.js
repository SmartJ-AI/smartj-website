async function sendMessage() {

  const input = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value;

  if (!message) return;

  // رسالة المستخدم
  const userDiv = document.createElement("div");

  userDiv.className = "message user";
  userDiv.innerText = message;

  chatBox.appendChild(userDiv);

  input.value = "";

  // رسالة انتظار
  const loadingDiv = document.createElement("div");

  loadingDiv.className = "message bot";
  loadingDiv.innerText = "الجوهرة تفكر...";

  chatBox.appendChild(loadingDiv);

  chatBox.scrollTop = chatBox.scrollHeight;

  try {

    const response = await fetch("https://api.smartjh1.com/ask", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message: message,
        user_id: "web-user"
      })

    });

    const data = await response.json();

    loadingDiv.innerText = data.reply || "ما فيه رد";

    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (error) {

    loadingDiv.innerText = "صار خطأ بالاتصال";

  }

}

// Enter Key
const input =
document.getElementById("messageInput")
||
document.getElementById("productInput")
||
document.getElementById("input")
||
document.querySelector("textarea")
||
document.querySelector("input");

if (input) {

  input.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key === "Enter"
      ) {

        event.preventDefault();
        sendMessage();
      }
    }
  );
}
