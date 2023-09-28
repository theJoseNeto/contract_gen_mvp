const { Router } = require("express");

const routes = Router();
const contractController = require("../controllers/contract_controller");


routes.get("/", (req, res) => {

    res.render('registro_cadastro.ejs')
});

routes.get("/home", contractController.home)
routes.post('/escolher', contractController.escolha);

routes.get('/servico', contractController.servico);
routes.get('/aluguel', contractController.aluguel);

routes.post("/aluguel", contractController.aluguelPost); 
routes.post("/servico", contractController.servicoPost); 


module.exports = routes; 