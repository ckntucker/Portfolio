//Toggles the nav to bring out to a hover
const showMenu=(toggleId, navId) =>{
    const toggle= document.getElementById(toggleId),
    nav= document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('toggle-nav','nav-menu')

const navLink=document.querySelectorAll('.nav-link')

//Removes active link then places active onto the clicked on link
function linkRemove(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
//Removes the nav menu after clicking navlink
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click', linkRemove))
    

