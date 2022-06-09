const form = document.querySelector("#form");
const link = document.querySelector("#link");
const app = document.querySelector(".plan")
const apps = document.querySelector(".plans")
const appp = document.querySelector(".plant")
let shortener = "https://api.shrtco.de/v2/shorten"
async function getApi(link) {
    const data = await fetch(`${shortener}?url=${link}`)
    const prom = await data.json()
    
  
        app.innerHTML = `shorten 1: <a href="${prom.result.full_short_link}" target="_blank">${prom.result.full_short_link}</a>`

        apps.innerHTML = `shorten 2: <a href="${prom.result.full_short_link2}" target="_blank">${prom.result.full_short_link2}</a>`
 
        appp.innerHTML = `shorten 3: <a href="${prom.result.full_short_link3}" target="_blank">${prom.result.full_short_link3}</a>`
    
   
}


form.addEventListener("submit", function(e) {
    e.preventDefault()
    if (link != "" && link != null) {
        getApi(link.value)
    } else {
        alert("You can't perform this action")
    }
    setTimeout(() => {
        app.style.display = "block"
    }, 1000);
    setTimeout(() => {
        apps.style.display = "block"
    }, 2000);
    setTimeout(() => {
        appp.style.display = "block"
    }, 3000);
    
})
const hamper = document.querySelector('#menu1');
  const Camp = document.querySelector('#menu2');
  const list = document.querySelector('.proper');
  hamper.addEventListener('click', function () {
      if (hamper.className != 'open') {
          Camp.style.display = 'block'
          list.style.display = 'block'
          hamper.style.display = 'none'
      } else {
          hamper.className = 'open';
          Camp.style.display = 'none'
          list.style.display = 'none'
      }
  })
  Camp.addEventListener('click', function () {
      if (Camp.className != 'open') {
          hamper.style.display = 'block';
          list.style.display = 'none';
          Camp.style.display = 'none';
      } else {
          Camp.className = 'open';
          hamper.style.display = 'none';
          list.style.display = 'block';
      }
  })