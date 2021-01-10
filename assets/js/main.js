const showingmenu = (toggle,nav,body) => {
    const toggleid = document.getElementById(toggle),
    navbarid = document.getElementById(nav),
    all = document.getElementById(body)

    if (toggleid && navbarid){
        toggleid.addEventListener('click',()=>{
            navbarid.classList.toggle('show')
            all.classList.toggle('expand')
        })
    }
}
showingmenu('nav-toggle','navbar','all')