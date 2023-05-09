const Togglemenu = (e) =>{
    let nav_links = document.getElementById("nav_links");
    e.name === 'menu' ? (e.name = 'close', nav_links.style.width = "65%", document.body.classList.toggle('lock-scroll'))
    : (e.name = 'menu', nav_links.style.width = "0%", document.body.classList.toggle('lock-scroll'))
};


