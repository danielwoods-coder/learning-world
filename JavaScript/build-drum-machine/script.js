const drumPads = document.querySelectorAll(".drum-pad");
drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const clickWord = pad.innerText;
    const str = pad.getAttribute("id")
    document.getElementById(`${clickWord}`).play();
    document.getElementById("display").innerText = str;
    setTimeout(()=> {
      document.getElementById("display").innerText = "";
    }, 500)
  })
})
document.addEventListener("keydown", (e) => {
  const clickKey = e.key;
  const validKey = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
  if (validKey.some(ele => ele === clickKey)) {
    const audio =  document.getElementById(`${clickKey.toUpperCase()}`);
    audio.play();
    const associatedPad = audio.closest("button");
    const str = associatedPad.getAttribute("id");
    document.getElementById("display").innerText = str;
    setTimeout(()=> {
      document.getElementById("display").innerText = "";
    }, 500)
  }
})