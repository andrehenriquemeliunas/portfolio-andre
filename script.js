$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedor", "Chatbot Developer", "Futuro Analista de Sistemas"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

//Envia infos pela api após click no botao
const btn = document.querySelector("#send")

function requisicao(url, body){
    alert("Obrigado! Informações enviadas com sucesso!")

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() { 
        console.log(this.responseText)
    }

    return request.responseText
}

btn.addEventListener("click", function(e){

    e.preventDefault()

    let url = "https://eoz9r64awewsfzf.m.pipedream.net"

    const inputName = document.querySelector("#name")
    const name = inputName.value

    const inputEmail = document.querySelector("#email")
    const email = inputEmail.value

    const inputText = document.querySelector("#text")
    const text =   inputText.value

    body = {
        "name" : name,
        "email" : email,
        "message" : text
    }

    requisicao(url, body)
})
