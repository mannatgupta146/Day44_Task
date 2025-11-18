let btn = document.querySelector('button')
let main = document.querySelector('#main')
let arr = [
  "Proud Sheryians learner",
  "Mannat keeps growing",
  "Code. Debug. Repeat.",
  "Sheryians coding vibes",
  "Learning never stops",
  "Daily JS practice",
  "Frontend journey rising",
  "DOM concepts mastered",
  "Projects getting better",
  "Sheryians energy always"
];


btn.addEventListener('click', function(){
    let h1 = document.createElement("h1")
    main.appendChild(h1)
    let a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a]

    let x = Math.random()*80
    let y = Math.random()*80
    h1.style.position = 'absolute'
    h1.style.zIndex = '-1'
    h1.style.top = x + '%'
    h1.style.left = y + '%'

    let scl = Math.random()*3
    h1.style.scale = scl
    h1.style.textWrap = "no-wrap"

    let rot = Math.random()*360
    h1.style.rotate = rot + "deg"

    let c1 = Math.random()*256
    let c2 = Math.random()*256
    let c3 = Math.random()*256
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`
})