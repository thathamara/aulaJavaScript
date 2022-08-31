{
    let animal=prompt('Digite a raça do animal:');
    switch(animal)
    {
        case"rato":
        alert( `Vendemos gaiolas especiais para : ${animal}`);
    break;

        case"passarinho":
        alert( `Vendemos implante rastreador para : ${animal}`);
    break;

    case "cachorro"|| "gato" || "coelho":
        alert( `Oferecemos banho e tosa para : ${animal}`);
    break;

    case "cavalo"|| "cabra" || "jumento":
        alert( `Oferecemos veterinario especializado para : ${animal}`);
    break;

    default:
        alert(`Não trabalhamos com outros animais!!`);
    
    }
    
}