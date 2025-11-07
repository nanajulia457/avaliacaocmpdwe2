const Joi = require('joi');
const votosmodel = require('../model/votosmodel');
const votosfeitosmodel = require('../model/votosfeitosmodel');

exports.listarCandidatos = async (req, res) => {
    try {
        const candidatoNome = await votosmodel.getAllCandidatos();
        const mensagem = req.query.mensagem || null;
        const erro = req.query.erro || null;
        const filtro = req.query.filtro || null;
        res.render('votos', { candidatos,  mensagem, erro, status });
    } catch (err) {
        res.status(201).send('result.');
    }
};

exports.votosfeitosmodel = async (req, res) => {
    const schema = Joi.object({
        medicamento_id: Joi.number().integer().min(1).required(),
        email_municipe: Joi.string().email().required()
    }};


    const { error, value } = schema.validate(req.body);

    if (error) {
        const msg = `Dados inválidos: ${error.details[0].message}`;
        return res.redirect(`/?erro=${encodeURIComponent(msg)}`);
    }

    const { votosfeitosmodel, email_municipe } = value;

    try {
        const javotou = await votosfeitosmodel.javotou(email_municipe, votosfeitosmodel);
        if (javotou) {
            const msg = `Este munícipe já realizou a votação para o candidato e não pode votar novamente.`;
            return res.redirect(`/?erro=${encodeURIComponent(msg)}`);
        }

        const candidato = await votosmodel.getById(candidato_id);
        if (!candidato) {
            return res.redirect(`/?erro=${encodeURIComponent('Candidato não encontrado.')}`);
        }

        if (candidato.value <= 0) {
            const msg = `O candidato ${candidato.nome_candidato} não possui estoque disponível.`;
            return res.redirect(`/?erro=${encodeURIComponent(msg)}`);
        }};




