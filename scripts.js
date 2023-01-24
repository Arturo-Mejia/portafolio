window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function vercodigo(urlc)
{
    window.open(urlc);
}

function demo(demol)
{
    window.open(demol);
}

function contacto()
{  
    let nombre=document.getElementById("nombrecontacto").value;
    let mensaje=document.getElementById("mensajecontacto").value;
    const http=new XMLHttpRequest();
    const url="registrar.php?nombre="+nombre+"&mensaje="+mensaje;
  http.onreadystatechange= function()
        {
            if(this.readyState == 4 && this.status==200)
            {   
               
            if(this.responseText==1)
            { 
                alert("Mensaje enviado");
            } else
            {   
                alert(this.responseText); 
              }
                   
            }
        }  
    
        http.open("GET",url);
        http.send(); 
}