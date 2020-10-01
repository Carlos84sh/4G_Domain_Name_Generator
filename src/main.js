require('./style.css')

window.onload = function() {
    
    let pronombres =['mi','el', 'tu'];
    let adjetivos =['redonda','conocido','marginado'];
    let nombres=['casa','pepito', 'juan'];

    let i,m,n;

    for(i=0;i<pronombres.length;i++){
        for(m=0;m<adjetivos.length;m++){
            for(n=0;n<nombres.length;n++){
               console.log(pronombres[i]+adjetivos[m]+nombres[n]+'.com');
            }
        }
    }
}