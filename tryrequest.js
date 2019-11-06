const app = window.document.getElementById('root')
const logo =window.document.createElement('img')
logo.src = 'renchant_logo_curr.png'
app.appendChild(logo)
const container = document.createElement('div')
container.setAttribute('class','container')

/*const xml = require("xmlhttprequest")*/
var xhttp = new XMLHttpRequest()
xhttp.open('GET','https://renchant.herokuapp.com//renchant/info/owner/active',true)
xhttp.setRequestHeader('Access-Control-Allow-Origin','*')
xhttp.send();
xhttp.onreadystatechange = () =>{
   if (xhttp.readyState == 4 && xhttp.status == 200){
   var jsonObj = JSON.parse( xhttp.responseText );
   jsonObj.forEach(element => {
    const card = window.document.createElement('div')
    card.setAttribute('class', 'card')

    const h2 = window.document.createElement('h2')
    h2.textContent = 'name:'.concat(element['name'])

    const p = window.document.createElement('p')
    p.textContent = 'email:'.concat(element['email']).
                    concat('active:'.concat(element['active'])).
                    concat('payment Details:'.concat(element['paymentDetails'])).
                    concat('mobileNumber:'.concat(str(element['mobileNumber'])))

    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(p)
   });

   }
}
