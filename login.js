const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira seu usuario:", function(usuario){
    rl.question("Insira sua senha:", function(senha){

        if(usuario === "admin" && senha === "1234"){
            console.log("Acesso Autorizado")
        } else{
            console.log("Acesso Negado")
        }
        rl.close();
    });
})