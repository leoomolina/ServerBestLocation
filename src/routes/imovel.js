// controller que deverá responder na rota configurada
const imovelController = require('../controllers/imovel');

// exportando a função anônima que representa as rotas da aplicação
module.exports = (app) => {

    // route invoca Expresse Router

    app.route('/api/imoveis/:id_imovel/:id_usuario')
        .get(imovelController.getImoveis)
        .delete(imovelController.deleteImovel)
        .put(imovelController.updateImovel)
        .post(imovelController.newImovel);

    app.route('/api/imovel/user/:idUsuario?')
        .get(imovelController.getImoveisUsuario);

    app.route('/api/searchimovel')
        .get(imovelController.searchImovel);
}