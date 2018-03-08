var color = prompt("Please enter the color fo the dot", "blue"); 
    var size = prompt("Please enter size of the dot", 8); 
    var elem = document.get
    document.getElementById("button").addEventListener("click", function(event) {
      var element = document.getElementsByTagName("div");
      for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
      }
      event.stopPropagation();
    });

    window.addEventListener("click", function() {
      var dot = document.createElement("div");
      dot.className = "dot";
      dot.style.background = color;
      dot.style.height = size + "px";
      dot.style.width = size + "px";
      dot.style.borderRadius = (size / 2) + "px";
      dot.style.left = (event.pageX - (size/2)) + "px";
      dot.style.top = (event.pageY - (size/2)) + "px";
      document.body.appendChild(dot);
    });