<script>
    // Click Event
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Click Event");
});

// Blur Event
document.getElementById("blurInput").addEventListener("blur", function() {
    alert("Blur Event");
});

// Change Event
document.getElementById("changeSelect").addEventListener("change", function() {
    alert("Change Event");
});

// Double Click Event
document.getElementById("dblclickText").addEventListener("dblclick", function() {
    alert("Double Click Event");
});

// Focus In Event
document.getElementById("focusInput").addEventListener("focus", function() {
    alert("Focus In Event");
});

// Focus Out Event
document.getElementById("focusInput").addEventListener("focusout", function() {
    alert("Focus Out Event");
});

// Mouse Over Event
document.getElementById("mouseOverDiv").addEventListener("mouseover", function() {
    alert("Mouse Over Event");
});

// Resize Event (Window Resize)
window.addEventListener("resize", function() {
    alert("Resize Event");
});

// Animation Start Event (assuming you have CSS animations)
document.getElementById("dblclickText").addEventListener("animationstart", function() {
    alert("Animation Start Event");
});

// Animation End Event (assuming you have CSS animations)
document.getElementById("dblclickText").addEventListener("animationend", function() {
    alert("Animation End Event");
});

        </script>