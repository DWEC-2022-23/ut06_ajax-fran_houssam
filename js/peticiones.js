const url = "../novios.json";

function peticionDelFichero(){
    return new Promise(function resolverUrl(resolve,reject){//creamos una promesa que nos debolvera valor/error 100% cuando el archivo este cargado

        let xhr=new XMLHttpRequest();//objeto de la peticion
        xhr.timeout=2000;//tiempo de ejecucion de la peticion

        xhr.open('GET',url,true); //Primero abrimos la peticion
        xhr.send();

        xhr.onreadystatechange=function(){//una vez que el archivo de peticion esta preparado ejecuta la promesa
            if(xhr.readyState===4){//si esta en estado 4 es que el estado de carga esta completo    
                if(xhr.status=== 200){ //si el estado del fichero eswta correcto 
                    //una vez que se ejecita la promesa puede devolver dos estados:resolve[todo bien]
                    //reject[fallo]
                    resolve(xhr.response);
                    let datos = JSON.parse(this.responseText);
                    for(let objeto of datos){
                        const li = createLI(objeto.nombre);
                        ul.appendChild(li);
                    }

                }else{
                    reject(xhr.status);
                }
            }
        };

        
        
        xhr.ontimeout=function(){
            reject("time out!!");
        }

    })
}

alert(peticionDelFichero());