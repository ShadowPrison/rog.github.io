const myImg = document.querySelector("img");

myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if(mySrc == "https://images.unsplash.com/photo-1536009197840-7b923cc3e195?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") {
        myImg.setAttribute("src", "cat.jpg" );
    } else {
        myImg.setAttribute("src", "https://images.unsplash.com/photo-1536009197840-7b923cc3e195?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
  };
  
  