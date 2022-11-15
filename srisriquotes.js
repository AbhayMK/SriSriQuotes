function getQuote() {
  s = Math.floor(Math.random() * 30 + 1);
  console.log(s);
  str = "quote" + s.toString();
  console.log(quotes[str]);
  return quotes[str];
}

document.getElementById("quote-container").innerHTML = text;
