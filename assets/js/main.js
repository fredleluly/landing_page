const showingmenu = (toggle,nav,body) => {
    const toggleid = document.getElementById(toggle),
    navbarid = document.getElementById(nav),
    all = document.getElementById(body)

    if (toggleid && navbarid){
        toggleid.addEventListener('click',()=>{
            navbarid.classList.toggle('show')
            toggleid.classList.toggle('rotate_toggle')
            all.classList.toggle('expand')
        })
    }
}
showingmenu('nav-toggle','navbar','all')


// make active link
const linkcolor = document.querySelectorAll('.nav_link')
function activelink(){
    linkcolor.forEach(Link => Link.classList.remove('active'))
    this.classList.add('active')
}
linkcolor.forEach(Link => Link.addEventListener('click',activelink))