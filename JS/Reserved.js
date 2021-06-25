/* Sprawdzenie poprawnosci wpisanych danych */
function getPoleIf(poleId, obiektRegex) {
  var obiekField = document.querySelector(poleId).value;
  if (!obiektRegex.test(obiekField)) {
    return (undefined);
  } else {
    return (obiekField);
  }
}
/* Pobieranie wpisanych danych oraz wypisanie bledow gdy one istnieja */
function podtwierdz() {
  var name,
    surname,
    email,
    tel,
    date,
    country,
    obiektNazw = /^[a-zA-Z]{2,20}$/,
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/,
    data;
  //pobieranie danych od użytkownika 
  name = getPoleIf('#name', obiektNazw);
  surname = getPoleIf('#last-name', obiektNazw);
  email = getPoleIf('#exampleFormControlInput1', obiektemail);
  tel = document.querySelector('#example-tel-input').value;
  date = document.querySelector('#example-date-input').value;
  country = document.querySelector('#kraj').value;
  const temp = document.getElementsByName('zaplata');
  //gdy danę użytkownika nie zgadzają się z patternem, to wystąpia odpowiedni komunikat
  if (name === undefined) {
    alert("Proszę wpisać poprawne imię");
  } else if (surname === undefined) {
    alert("Niepoprawne nazwisko");
  } else if (email === undefined) {
    alert("Niepoprawny Email");
  } else {
  //zapisanie danych do zmienej z pózniejszem wyswietlaniem na ekran
    data = "Następujące dane zostaną wysłane:\n";
    data += "Imię : " + name + "\n";
    data += "Nazwisko : " + surname + "\n";
    data += "Telefon : " + tel + "\n";
    data += "Email: " + email + "\n";
    data += "Dzień rejsa : " + date + "\n";
    data += "Lokacja: " + country + "\n";
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].checked) {
        data += "Sposób opłaty: " + temp[i].value + "\n";
      }
      if (window.confirm(data)) {
        setToCart();
        return true;
      } else {
        return false;
      }
    }

  }
/* Zapisywanie danych do localStorage */
  function setToCart() {
    var item = {};
    item.name = document.querySelector('#name').value;
    item.surname = document.querySelector('#last-name').value;
    item.email = document.querySelector('#exampleFormControlInput1').value;
    item.date = document.querySelector('#example-date-input').value;
    item.country = document.querySelector('#kraj').value;
    item.tel = document.querySelector('#example-tel-input').value;
    const temp = document.getElementsByName('zaplata');
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].checked) {
        item.pay = temp[i].value;
      }
    }
    localStorage.setItem(item.name, JSON.stringify(item));
  }
}