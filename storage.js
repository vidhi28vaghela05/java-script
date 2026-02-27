// localStorage API: setItem, getItem, removeItem, clear
// localstorage --> save that data into browser's storage, after close browser data wasn't deleted
// (browser nu aevu storage ke jema data store thai chhe and
// browser band thai jay to pan data delete thato nathi)
// ~ 5 MB storage

// setItem
// localStorage.setItem("key", value)
localStorage.setItem("username", "test");

// getItem
// localStorage.getItem("Key name")
console.log(localStorage.getItem("username"));

// removeItem
// localStorage.removeItem("username");
// updateItem
localStorage.setItem("username", "demo");

// sessionStorage API
// Session Storage --> save that for temporarily time when you close tab delete was deleted
// (aa storage data ne temporarily time mate save kari ne rakhe chhe,
// jyare pan tab close karsho tyare teni sathe data pan delete thai jai chhe)
// ~ 5Mb Storage

// setItem
sessionStorage.setItem("email", "test@gmail.com");

// getItem
console.log(sessionStorage.getItem("email"));

// removeItem
//sessionStorage.removeItem("email");