let day = document.getElementsByClassName('day')
let hidden = document.getElementById("hidden")

day[0].style.height = "50px"
day[1].style.height = "90px"
day[2].style.height = "130px"
day[2].style.backgroundColor = "hsl(186, 34%, 60%)"
day[2].addEventListener('mouseenter', () => {
    day[2].style.backgroundColor = 'hsl(186, 34%, 60%, 0.582)'
    day[2].style.tranition = '1s'
    hidden.style.display = "block"
})
day[2].addEventListener('mouseleave', () => {
    day[2].style.backgroundColor = 'hsl(186, 34%, 60%)'
    hidden.style.display = "none"
})
day[3].style.height = "80px"
day[4].style.height = "60px"
day[5].style.height = "120px"
day[6].style.height = "70px"
