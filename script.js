const form = document.querySelector(".js-question");

form.addEventListener("submit", handlerQuestion);

function handlerQuestion(evt) {
  evt.preventDefault();
  const { name, phone, email, comment } = evt.currentTarget.elements;

  const requst = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    comment: comment.value,
  };
  console.log(requst);
}
