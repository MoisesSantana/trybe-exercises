window.onload = function() {
  
  let buttons = document.querySelectorAll('button');

  // get name

  let name = '';
  let inputName = document.querySelector('#name');
  inputName.addEventListener('keyup', function() {
    name = inputName.value;
  });
  
  // print message
  
  buttons[1].addEventListener('click', function(){
    alert(`I told you not to do that ${name}`);
  });
  
  // change mod (black and white)

  let body = document.querySelector("body");
  buttons[0].addEventListener('click', function(){
    if (body.className == "") {
      body.className = "dark";
      document.querySelector('h1').style.color = 'rgb(228 , 0 , 0)';
    }
    else {
      body.className = "";
      document.querySelector('h1').style.color = 'rgb(0 , 0 , 0)';
    }
  });
  
  // play audio

  buttons[2].addEventListener('click', function() {
    document.querySelector("#audio").play();
    document.querySelector("#story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
  });
}
