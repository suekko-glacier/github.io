
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/magao.PNG") {
    myImage.setAttribute("src", "images/egao.PNG");
  } else {
    myImage.setAttribute("src", "images/magao.PNG");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      alert("Welcome " + myName + " ..usa");
    }
}
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    alert("Hey Welcome " + storedName + " ..usa");
}
  
myButton.onclick = () => {
    setUserName();
};  