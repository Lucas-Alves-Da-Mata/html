const classe = "pé";

switch (classe) {
    case "Guerreiro":
        console.log("classe: Guereiro");
        console.log(" O guerreiro é um combatente corpo a corpo, especializado em força e resistencia.");
        console.log("habilidades: atque poderoso, defesa solida, furia de batalha");
        break;
    case "Mago":
        console.log("classe: mago");
        console.log("O mago é um conjurador de feitiços, especializado em magia ofenciva e suporte.");
        console.log("habilidades: magia de fogo, magia de gelo, magia de cura");
        break;
        case"Arqueiro":
        console.log("classe; arqueiro");
        console.log("O arqueiro é um atirador de longa distancia, respecializado em pricisão e agilidade.");
        console.log("habilidades: precisão, agilidade, tiro com precisão");
        break;
    case"Ladino":
        console.log("classe: ladino");
        console.log("O ladino é um especialista em furtividades e tropas, utilidades para sabotagem e especionagem.");
        console.log("habilidades: furtividade, tropas, assassino.");
        break
    default:
        console.log("classe desconhecida. por favor, escolha entre guerreiro, mago, arqueiro ou ladino");
}