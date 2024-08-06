document.characterSet = "Big-5";
document.charset = "Big-5";
document.write('<h1 id="hh">o, World!</h1>');
document.write('<button onclick="test()">Change</button>');

function test() {
    var h = document.getElementById("hh");
    h.innerText = "Good, see you.";
    document.characterSet = "Big-5";
    document.charset = "Big-5";
}
