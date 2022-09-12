mobileMenu = () =>{
    let list = document.querySelector('nav ul');
    let btn = document.querySelector('.mobileBtn');
    let img = document.querySelector('header');
    console.log(img)
    if(btn.innerText === "Menu"){
        btn.innerText = "Close"
        list.style.display = 'block'
        img.style.marginTop = "170px"
    }else{
        btn.innerText = "Menu"
        list.style.display = "none"
        img.style.marginTop = "0"
    }
}