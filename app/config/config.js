// Archivo de configuración que retorna un objeto: puerto y base de datos usada 
// DB: process.env.DB || 'mongodb://localhost:27017/api-english-verb-reg'
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb+srv://marlon:marlon@cluster0.znqfr.mongodb.net/api-english-verb-reg?retryWrites=true&w=majority'
}