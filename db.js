import {Sequelize} from "sequelize";

const db = new Sequelize(
    "projetojs_94o3",
    "projetojs_94o3_user",
    "RYnloNzhgCsf86EU8iC56etDMUX5jn8p",
    {     
        host: "dpg-d4tannmuk2gs73emoog0-a.oregon-postgres.render.com",
        dialect: "postgres",
        port: "5432",
        dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false },
        }
    }
);

db.authenticate().then(function(){
    console.log("Conectado ao banco de dados com sucesso")
}).catch(function(erro){
    console.log("Erro ao conectar ao banco de dados"+ erro)
});

export default db;
