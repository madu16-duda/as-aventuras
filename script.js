const gameText = document.getElementById("game-text");

function escolher(opcao) {
    switch (opcao) {
        case 1:
            gameText.innerHTML = "Você entrou na floresta e encontrou um mago misterioso. Ele te oferece duas opções: <br><br> \
            <button onclick='continuar(1)'>Aceitar a ajuda do mago</button> \
            <button onclick='continuar(2)'>Recusar e seguir sozinho</button>";
            break;
        case 2:
            gameText.innerHTML = "Dentro da caverna, você vê uma luz estranha e ouve um ruído assustador. O que fazer?<br><br> \
            <button onclick='continuar(3)'>Investigar a luz</button> \
            <button onclick='continuar(4)'>Sair rapidamente</button>";
            break;
        case 3:
            gameText.innerHTML = "Você retornou ao vilarejo e viu que os moradores estão em pânico com algo nas montanhas.<br><br> \
            <button onclick='continuar(5)'>Perguntar aos moradores</button> \
            <button onclick='continuar(6)'>Ignorar e descansar</button>";
            break;
        default:
            gameText.innerHTML = "Escolha inválida!";
    }
}

function continuar(opcao) {
    switch (opcao) {
        case 1:
            gameText.innerHTML = "O mago lhe dá um amuleto que te protege de monstros. Você continua seguro.<br><br> \
            <button onclick='escolher(1)'>Explorar mais na floresta</button>";
            break;
        case 2:
            gameText.innerHTML = "Você segue sozinho e se perde na floresta. Agora está em perigo!<br><br> \
            <button onclick='escolher(1)'>Tentar encontrar o caminho de volta</button>";
            break;
        case 3:
            gameText.innerHTML = "A luz era uma armadilha! Você enfrenta um monstro.<br><br> \
            <button onclick='escolher(2)'>Lutar contra o monstro</button>";
            break;
        case 4:
            gameText.innerHTML = "Você saiu em segurança. Agora pode descansar um pouco.<br><br> \
            <button onclick='escolher(3)'>Voltar ao vilarejo</button>";
            break;
        case 5:
            gameText.innerHTML = "Os moradores dizem que um dragão está se aproximando. Você se prepara para enfrentá-lo.<br><br> \
            <button onclick='escolher(3)'>Voltar para a batalha</button>";
            break;
        case 6:
            gameText.innerHTML = "Você decidiu descansar, mas o dragão chega e você não está preparado. Game over!<br><br> \
            <button onclick='location.reload()'>Reiniciar Jogo</button>";
            break;
        default:
            gameText.innerHTML = "Escolha inválida!";
    }
}
