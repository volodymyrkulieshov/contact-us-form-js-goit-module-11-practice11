const form = document.querySelector(".js-question");

form.addEventListener("submit", handlerQuestion);

function handlerQuestion(evt) {
  evt.preventDefault();

  // <!-- evt.currentTarget.elements -->
  //   const { userName, phone, email, question } = evt.currentTarget.elements;
  //   const requst = {
  //     name: userName.value,
  //     email: email.value,
  //     phone: phone.value,
  //     comment: question.value,
  //   };
  // -----------FORM-DATA
  const formData = new FormData(evt.currentTarget);
  const request = {};
  formData.forEach((value, key) => (request[key] = value));
  serviceQuestion(request)
    .then(() => {
      alert("Succses");
    })
    .catch(() => alert("Error"));

  evt.currentTarget.reset();
}

function serviceQuestion(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };
  return fetch("http://127.0.0.1:3000/api/question", options).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}
