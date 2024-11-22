const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/f.png") {
        myImage.setAttribute("src", "images/f2.png");
    } else {
        myImage.setAttribute("src", "images/f.png");
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
let secondButton = document.querySelector("button:nth-of-type(2)");
secondButton.onclick = () => {
    localStorage.removeItem("name");}