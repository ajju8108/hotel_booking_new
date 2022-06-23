


// VIEW MORE
function show() {
  var x = document.getElementById("div2");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.display = "flex";
    document.getElementById("viewmore").innerHTML = "View Less";

  } else {
    x.style.display = "none";
    document.getElementById("viewmore").innerHTML = "View More";
  }
}
