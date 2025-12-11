import express from "express";
import Agendamento from "./agendamentos.js";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());

const __dirname = path. resolve();

app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());

// GET - Consulta os dados cadastrados
app.get ("/agendamentos", async (req, res)=>{
    try {
      const showAgendamentos = await Agendamento.findAll();
      res.send(showAgendamentos);
      } catch (error) {
        res.send("Erro ao buscar os dados no banco:" + error);
      }
})

app.post('/agendamentos', async (req, res)=>{
  try {
    await Agendamento.create({
            nome: req.body.nome,
            telefone: req.body.telefone,
            servico: req.body.servico,
            data: req.body.data,
            horario: req.body.horario
    })
    res.send("Agendamento cadastrado com sucesso!");
   } catch (error) {
    res.send("Erro ao cadastrar os agendamentos" + error);
   }
  }
);

app.patch("/agendamentos/:id", async (req, res)=> {
  try {
       await Agendamento.update(
      {
            nome: req.body.nome,
            telefone: req.body.telefone,
            servico: req.body.servico,
            data: req.body.data,
            horario: req.body.horario
      },
      { where: { id: req.params.id } }
    );
    res.send("Agendamento atualizado com sucesso!");
  } catch (erro) {
    res.send("Erro ao atualizar agendamento: " + erro);
  }
});

app.delete("/agendamentos/:id", async (req, res) => {
  try {
        await Agendamento.destroy({
          where: { id: req.params.id }
    });
    res.send("Agendamento deletado com sucesso!");
  } catch (erro) {
    res.send("Erro ao deletar agendamento: " + erro);
  }
});

app.listen(3000, function(){
  console.log("O servidor esta rodando na porta 3000");
});



