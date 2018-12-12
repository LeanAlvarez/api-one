const Database = require('./app/config/database')
const CONFIG = require('./app/config/config')
const App = require('./app/app')



Database.connect()

App.listen(CONFIG.PORT, (err) =>{
    if(err) return console.log(err)
    console.log(`Servidor corriendo en el Puerto: ${CONFIG.PORT}` )
})