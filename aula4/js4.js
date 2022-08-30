{
    let letra=prompt('Digite uma letra:');

    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u' )
    {
        console.log(`A letra ${letra} é vogal!! `);
    }
    else if(letra=='b' || letra=='c' || letra=='d' || letra=='f' || letra=='g' || letra=='h' || letra=='j' || letra=='k' || letra=='l' || letra=='m' || letra=='n' || letra=='p' || letra=='q' || letra=='r' || letra=='s' || letra=='t' || letra=='v' || letra=='w' || letra=='x' || letra=='y' || letra=='z'){
        console.log(`A letra ${letra} é consoante!! `);
    }
    else if( letra=='1' || letra=='2' || letra=='3' || letra=='4' || letra=='5' || letra=='6' || letra=='7' || letra=='8' || letra=='9' || letra=='10' ){
        letra=Number(letra);
        console.log(`Invalido!!! Digite uma Letra!`);
    }
}