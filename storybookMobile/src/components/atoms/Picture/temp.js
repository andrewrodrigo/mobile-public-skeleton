//TESTE GZIP
const {gzip, ungzip} = require('node-gzip');
const image = require('./base64Image');

const retorno = async ()=>{
    const compressed = await gzip(image.image); // Implementar Gzip para imagem
    console.warn(compressed.length)
    console.warn(image.image.length)
}

retorno()

