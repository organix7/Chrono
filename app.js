(()=>{ //L'heure actuelle
  var center = document.querySelector("center")
  var ChronoTitle = document.getElementById("2")
  var date = new Date()
  var p = document.createElement('p')
  var text = document.createTextNode(addZero(date))

  p.appendChild(text)
  p.className="timer"
  center.insertBefore(p, ChronoTitle)

  setInterval(()=>{
    var timer = document.getElementsByClassName("timer").item(0)
    date = new Date()

    timer.innerText= addZero(date)
  },1000)


  function addZero(date) {
    if(parseInt(date.getHours())<=9)
     var h = "0"+date.getHours()
    else
     var h = date.getHours()

    if(parseInt(date.getMinutes())<=9)
     var m = "0"+date.getMinutes()
    else
     var m = date.getMinutes()

    if(parseInt(date.getSeconds())<=9)
      var s = "0"+date.getSeconds()
    else
      var s = date.getSeconds()

    return h+':'+m+':'+s
  }
})();

(()=>{ //Récupéré les infos du formulaire
  var form = document.querySelector('form')

  var lh = document.createElement('label')
  lh.innerText="hour:"
  var h = document.createElement('select')

  var lm = document.createElement('label')
  lm.innerText="minute:"
  var m = document.createElement('select')

  var ls = document.createElement('label')
  ls.innerText="seconde:"
  var s = document.createElement('select')

  for (var i = 0; i < 24; i++) {
    var o = document.createElement('option')
    o.value=i
    o.innerText=i
    h.appendChild(o)
  }
  for (var i = 0; i < 60; i++) {
    var o = document.createElement('option')
    o.value=i
    o.innerText=i
    m.appendChild(o)
  }
  for (var i = 0; i < 60; i++) {
    var o = document.createElement('option')
    o.value=i
    o.innerText=i
    s.appendChild(o)
  }

  h.setAttribute("name", "hour")
  m.setAttribute("name", "minute")
  s.setAttribute("name", "seconde")

  lh.setAttribute("for","hour")
  lm.setAttribute("for","minute")
  ls.setAttribute("for","seconde")

  form.appendChild(lh)
  form.appendChild(h)

  form.appendChild(lm)
  form.appendChild(m)

  form.appendChild(ls)
  form.appendChild(s)
})();

(()=>{  //Chronomètre

  var btn = document.querySelector("button")
  var parent = document.querySelector('center')
  var form = document.querySelector("form")
  var p = document.createElement('p')
  var h = 0
  var m = 0
  var s = 0
  var text = document.createTextNode(addZero(h,m,s))

  p.appendChild(text)
  p.classList.add("chrono-finish")
  p.setAttribute("name","chrono")

  parent.insertBefore(p,form)

  setInterval(()=>{
    var chrono = document.getElementsByName("chrono").item(0)

    if(h!==0 && m===0 && s===0){
      h--
      m=59
      s=59
    }
    else if (m!==0 && s===0){
      m--
      s=59
    }
    else if(h===0 && m===0 && s===0){
      h=0
      m=0
      s=0
      chrono.classList.remove("chrono-bad")
      chrono.classList.add("chrono-finish")
    }
    else
      s--

    if(h===0 && m===0 && s!==0 && s<=10){
      chrono.classList.remove("chrono-good")
      chrono.classList.add("chrono-bad")
    }

    chrono.innerText=addZero(h,m,s)
  },1000)

  btn.addEventListener("click", ()=>{
    var chrono = document.getElementsByName("chrono").item(0)

    var hour = document.getElementsByName("hour")[0]
    var hour = parseInt(hour.options[hour.selectedIndex].text)
    var min = document.getElementsByName("minute")[0]
    var min = parseInt(min.options[min.selectedIndex].text)
    var sec = document.getElementsByName("seconde")[0]
    var sec = parseInt(sec.options[sec.selectedIndex].text)+1

    h = hour
    m = min
    s = sec

    if(sec>10 || hour!==0 || min!==0){
      chrono.classList.remove("chrono-finish")
      chrono.classList.add("chrono-good")
    }

    else if(sec<=10 && hour===0 && sec===0){
      chrono.classList.remove("chrono-finish")
      chrono.classList.add("chrono-bad")
    }
  })

  function addZero(h,m,s) {
    if(h<=9)
     var h = "0"+h

    if(m<=9)
     var m = "0"+m

    if(s<=9)
      var s = "0"+s

    return h+':'+m+':'+s
  }
})();
