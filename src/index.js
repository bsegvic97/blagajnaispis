import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function ispis(a) {
  var s = "";
  a = a.split("");
  for (var i = 0; i < a.length; i++) {
    if (a[i] === "0") s += " _ ";
    else if (a[i] === "1") s += "   ";
    else if (a[i] === "2") s += " _ ";
    else if (a[i] === "3") s += " _ ";
    else if (a[i] === "4") s += "   ";
    else if (a[i] === "5") s += " _ ";
    else if (a[i] === "6") s += " _ ";
    else if (a[i] === "7") s += "_  ";
    else if (a[i] === "8") s += " _ ";
    else if (a[i] === "9") s += " _ ";
    else if (a[i] === "a") s += " _ ";
    else if (a[i] === "b") s += "   ";
    else if (a[i] === "c") s += " _ ";
    else if (a[i] === "d") s += "   ";
    else if (a[i] === "e") s += " _ ";
    else if (a[i] === "f") s += " _ ";
  }
  s += "\n";
  for (i = 0; i < a.length; i++) {
    if (a[i] === "0") s += "| |";
    else if (a[i] === "1") s += " | ";
    else if (a[i] === "2") s += " _|";
    else if (a[i] === "3") s += " _|";
    else if (a[i] === "4") s += "|_|";
    else if (a[i] === "5") s += "|_ ";
    else if (a[i] === "6") s += "|_ ";
    else if (a[i] === "7") s += " | ";
    else if (a[i] === "8") s += "|_|";
    else if (a[i] === "9") s += "|_|";
    else if (a[i] === "a") s += "|_|";
    else if (a[i] === "b") s += "|_ ";
    else if (a[i] === "c") s += "|  ";
    else if (a[i] === "d") s += " _|";
    else if (a[i] === "e") s += "|_ ";
    else if (a[i] === "f") s += "|_ ";
  }
  s += "\n";
  for (i = 0; i < a.length; i++) {
    if (a[i] === "0") s += "|_|";
    else if (a[i] === "1") s += " | ";
    else if (a[i] === "2") s += "|_ ";
    else if (a[i] === "3") s += " _|";
    else if (a[i] === "4") s += "  |";
    else if (a[i] === "5") s += " _|";
    else if (a[i] === "6") s += "|_|";
    else if (a[i] === "7") s += " | ";
    else if (a[i] === "8") s += "|_|";
    else if (a[i] === "9") s += " _|";
    else if (a[i] === "a") s += "| |";
    else if (a[i] === "b") s += "|_|";
    else if (a[i] === "c") s += "|_ ";
    else if (a[i] === "d") s += "|_|";
    else if (a[i] === "e") s += "|_ ";
    else if (a[i] === "f") s += "|  ";
  }
  return s;
}
console.log(ispis("4789135ceab7fed"));
