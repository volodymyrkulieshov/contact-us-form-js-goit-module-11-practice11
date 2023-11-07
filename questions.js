function serviceQuestion() {
  return fetch("http://127.0.0.1:3000/api/getAll").then((response) => {
    if (!respnse.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}
serviceGetQuestion()
  .then((data) =>
    container.insertAdjacentHTML("afterbegin", createMarkup(data))
  )
  .catch((err) => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, email, phone, comment }) => `
  <li class="card" data-id="${_id}">
    <div class="card-content">
        <h2 class="card-name">${name}</h2>
        <div>Phone: <span class="card-phone">${phone}</span></div>
        <div>Email: <span class="card-email">${email}</span></div>
        <div><span class="card-comment">${comment}</span></div>
    </div>
 </li>
  `
    )
    .join("");
}
