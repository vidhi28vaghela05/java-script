// Fetch Apis Using Fetch method

// fetch API is used to make network requests and handle responses in JavaScript. It provides a modern and flexible way to interact with APIs and retrieve data from servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perform different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

// fetch --> then --> then --> catch
function userdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((rawdata) => {
      return rawdata.json();
    })
    .then((data) => {
      console.log(data);

      data.forEach((user) => {
        rendorui(user);
      });
    })
}
userdata();

function rendorui(user) {
  let div = document.querySelector(".main");

  div.innerHTML += `
  <div class="bg-white p-6 rounded-xl shadow-md">

    <h2 class="text-xl font-bold">${user.name}</h2>
    <p class="text-gray-500">@${user.username}</p>

    <div class="mt-4 text-sm">
      <p>📧 ${user.email}</p>
      <p>📍 ${user.address.city}, ${user.address.street}</p>
    </div>

    <div class="mt-4 bg-gray-100 p-3 rounded">
      <p class="font-semibold">${user.company.name}</p>
      <p class="text-xs italic">${user.company.catchPhrase}</p>
    </div>

  </div>
  `;
}