

//A) synchronous callbacks (se ejecutan inmediatamente y son bloqueadoras)

export const generaNumero = () => {
  return Math.floor(Math.random() * 10);
};

export const imprimeNumero = (callback) => {
  let numero = callback();
  console.log(numero);
};

imprimeNumero(generaNumero);

//B) asynchronous callbacks (se ejecutan cuando algo pasa)


export const bajaVideo = (url, callback) => {
 const isFunction = typeof callback;
  if(isFunction !== 'function' ){
    throw new Error('not type function');
  }
  if(url === ''){
    throw new Error('empty url not allowed');
  }

  console.log(`Bajando video de ... ${url} `);
    setTimeout(() => {
      console.log(`Video de ${url} descargado`);
      callback(url);
    }, 2000);
};

export const procesaVideo = (url) => {
  if( url !== ''){
    console.log(`Procesando video de ${url}`);
  }else{
    throw new Error('empty string for url')
  }
 
};

let url = 'https://youtu.be/gisEHxRQIto';

bajaVideo(url, procesaVideo);

// // C Asynchronous Promises

let teHasPortadoBien = false;
export let presentState = '';

export const siMePortoBien = (teHasPortadoBien)=> new Promise((resolve, reject) => {
  
  if( typeof teHasPortadoBien !== 'boolean'){
    throw new Error('behavior is boolean');
  }
  if (teHasPortadoBien) {
    const telefono = {
      modelo: 'iPhone12',
      capacidad: '128GB',
      color: 'rojo',
    };
    resolve(telefono);
  } else {
    reject('te has portado mal');
  }
 
});

// // Antes de usar la promesa hay que definir dos funciones handlers tipo callback 
// // success handler --> implementa la logica si  la promesa se cumplio
// // failure handler --> implementa la logica si  la promesa no se cumplio

export const promesaCumplida = (resolvedValue) => {
  if( typeof resolvedValue !== 'object'){
    throw new Error('must resolve data of type object');
  }
  console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
  const text = `Te regalo tu nuevo ${resolvedValue.modelo}`;
  presentState = 'getPresent';
};
export const promesaRota = (rejectedValue) => {
  if( typeof rejectedValue !== 'string'){
    throw new Error('must reject and return data of type string');
  }
  console.log(`No te compro nada porque ${rejectedValue}`);
  const text = `No te compro nada porque ${rejectedValue}`;
  presentState = 'refusePresent';
};

//siMePortoBien.then(promesaCumplida, promesaRota);

export const pideRegalo = () => {
  siMePortoBien(teHasPortadoBien).then(promesaCumplida).catch(promesaRota);
};

pideRegalo();


