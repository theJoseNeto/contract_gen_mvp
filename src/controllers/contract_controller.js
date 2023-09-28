const PDFDocument = require('pdfkit');
const data = require("../models/data");

exports.home = (req, res) => {
    res.render('home.ejs')
}

exports.aluguel = (req, res) => {
    res.render('form_aluguel');
};

exports.servico = (req, res) => {
    res.render("form_servico")
}

exports.escolha = (req, res) => {
    if (req.body.tipoDeServico == "servico") {
        res.redirect('/servico')
    } else if (req.body.tipoDeServico == "aluguel") {
        res.redirect('/aluguel')
    } else {
        res.redirect("/");
    }
};


exports.aluguelPost = (req, res) => {
    const { locadora, locatario, endereco } = req.body;
    const contract = data.contratos.aluguel(locadora, locatario, endereco);
    if (contract === "") res.redirect('/aluguel');

    const doc = new PDFDocument();
    doc.text(contract);
    const fileName = "CONTRATO_ALUGUEL.pdf"
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    doc.pipe(res);
    doc.end();

}
exports.servicoPost = (req, res) => {
    const { contratante, endereco, cpf } = req.body;
    const contract = data.contratos.prestacaoServico(contratante, endereco, cpf)
    if (contract === "") res.redirect('/servico')


    const doc = new PDFDocument();
    doc.text(contract);
    const fileName = "CONTRATO_SERVICO_PROGRAMACAO.pdf"
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    doc.pipe(res);
    doc.end();


}
