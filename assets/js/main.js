const showingmenu = (toggle,nav) => {
    const toggleid = document.getElementById(toggle),
    navbarid = document.getElementById(nav)

    if (toggleid && navbarid){
        toggleid.addEventListener('click',()=>{
            navbarid.classList.toggle('show')
        })
    }
}
showingmenu('nav-toggle','navbar')