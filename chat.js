async function sendMessage() {

  const input =
    document.getElementById(
      "messageInput"
    );

  const chatBox =
    document.getElementById(
      "chatBox"
    );

  if (!input || !chatBox)
    return;

  const message =
    input.value.trim();

  if (!message) return;

  const firebaseUid =
    localStorage.getItem(
      "firebase_uid"
    );

  if (!firebaseUid) {

    alert(
      "❌ لم يتم العثور على المستخدم"
    );

    return;
  }

  // رسالة المستخدم
  const userDiv =
    document.createElement(
      "div"
    );

  userDiv.className =
    "message user";

  userDiv.innerText =
    message;

  chatBox.appendChild(
    userDiv
  );

  input.value = "";

  // رسالة انتظار
  const loadingDiv =
    document.createElement(
      "div"
    );

  loadingDiv.className =
    "message ai";

  loadingDiv.innerText =
    "⏳ الجوهرة تفكر...";

  chatBox.appendChild(
    loadingDiv
  );

  chatBox.scrollTop =
    chatBox.scrollHeight;

  try {

    const conversationId =
      localStorage.getItem(
        "conversation_id"
      );

    const selectedRole =
      localStorage.getItem(
        "shoor_role"
      ) || "merchant";

    const response =
      await fetch(
        "https://smartj-backend-production.up.railway.app/ask",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            message:
              message,

            user_id:
              firebaseUid,

            role:
              selectedRole,

            conversation_id:
              conversationId
                ? Number(
                    conversationId
                  )
                : null
          })
        }
      );

    const data =
      await response.json();

    console.log(
      "Ask response:",
      data
    );

    // حفظ conversation_id
    if (
      data.conversation_id
    ) {

      localStorage.setItem(
        "conversation_id",
        data.conversation_id
      );
    }

    // limit reached
    if (
      data.limitReached
    ) {

      loadingDiv.innerText =
        "✨ وصلت للحد المجاني اليومي";

      return;
    }

    loadingDiv.innerText =
      data.reply ||
      "ما فيه رد";

    chatBox.scrollTop =
      chatBox.scrollHeight;

  } catch (error) {

    console.error(error);

    loadingDiv.innerText =
      "❌ صار خطأ بالاتصال";
  }
}

// Enter key
document.addEventListener(
  "DOMContentLoaded",
  () => {

    const input =
      document.getElementById(
        "messageInput"
      );

    if (!input) return;

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
);
