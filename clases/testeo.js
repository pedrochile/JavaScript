function iniciarSesion(){
    let opciones = Number(prompt(`Si desea crear una cuenta escriba 1 \nsi ya tiene una presione 2 \nSi no quiere crearse una presione 3`))

    switch(opciones){
        case 1 : registro(); break;

        case 2: logeo(); break;

        case 3: alert("Bienvenido a Avellena Cajas/Souvenirs"); break;

        default : alert("Opcion Erronea"); break;
    }
}
iniciarSesion();

/*Desde que comencé el curso, perdí pelo, subí de peso y aumento mi barba, es normal? (plus) ojeras mas grandes
*/

