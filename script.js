// Active navbar buttons
var btnContainer = document.getElementById("sectionNames");

var btns = btnContainer.getElementsByClassName("btn");

// looping throught available buttons
for(var i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', () => {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      // Make the clicked button active
      this.className += "active";
   });
}