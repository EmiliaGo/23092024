let frutas = ["Banana"];

frutas.push("Manzana");
console.log(frutas);

frutas.unshift("Mandariana");
console.log(frutas);


let tamaño = 5;

function xHori(tamaño){
    let linea = "";

    for(let i = 0; i<= tamaño -1; i++){
        linea = linea +"x";
        
     }
     console.log(linea);
}

function xVert(tamaño){
    let linea = "";

    for(let i = 0; i<= tamaño -1; i++){
        linea = linea +"x\n";
        
     }
     console.log(linea);
}
 

xHori(tamaño);
xVert(tamaño);



function tablasMultiplicar(){
    for (let i = 1; i <= 10; i ++){
        for(let y = 1; y <= 10; y ++ ){
            console.log( i + "X" + y + "="+ (i*y))
        }
    }
}

tablasMultiplicar();


let Frutas=["Platano", "Fresa","Sandia","Uva","Mango","Guayaba","Melón","Manzana","Frambuesa","Papaya"];

Frutas.forEach((elemento,index)=>{
   console.log((index+1)+"."+elemento);
});




