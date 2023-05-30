var nav = document.querySelector('.nav-bg');
console.log(nav);

function toggleMenu() {
    if (nav.classList.contains('displaynone')) {
        nav.classList.remove('displaynone');
    } else {
        nav.classList.add('displaynone');
    }
}

function toggleExtendUl(e) {
    
    if (e.target.localName == 'box-icon') {
        var ul = e.target.parentElement.parentElement.querySelector('.nav-extend-ul');

    } else {
        var ul = e.target.parentElement.querySelector('.nav-extend-ul');
    }

    var icon = ul.parentElement.querySelector('box-icon');

    
    if (ul.classList.contains('displaynone')) {
        ul.classList.remove('displaynone')
        icon.classList.add('rotate180');
    } else {
        ul.classList.add('displaynone')
        icon.classList.remove('rotate180');
    }   
    
}