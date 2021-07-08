const color=require('colors')
const fs = require('fs');

const crearArchivo= async(base =5,listar,hasta=3) => {
    try {
        console.clear;
        
        let salida='';
        for(x=1;x<=hasta;x++){
            salida+='====================\n'.grey;
            salida+= `   Tabla del ${ x } `;
            salida+='\n====================\n'.red;
            for(i=1;i<=10;i++){
                salida += `${x} x ${i} =  ${i*x} \n`;
            }
        }
        
        if(listar){
            console.log(salida);
        }
        //fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
            //    if(err) throw err;
            //    console.log('Tabla creada');
            //})
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err        
    }
}

module.exports={
    crearArchivo
}