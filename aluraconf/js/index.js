function clickSuave(seletor) {

    $(seletor).click(function (event) {
        event.preventDefault();
        var alvo = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(alvo).offset().top
        }, 1000);
    });
}

clickSuave("a[href*=descricao-evento]"); // essa função ativa o click na âncora do href correspondente
clickSuave("a[href*=sessao-palestrantes]");
clickSuave("a[href*=formulario]");