import residuos from "../models/Residuos.js";


class ResiduosController {
    static async cadastrarResiduos (req, res) {
        try {
          const novoResiduo = await residuos.create(req.body);
          res.status(201).json({ message: "criado com sucesso", novoResiduo });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar residuo` });
        }   
    }

    static async listarResiduos (req, res) {    
        try {
          const todosResiduos = await residuos.find()
          res.status(200).json(todosResiduos);
        } catch (erro) {    
          res.status(500).json({ message: `${erro.message} - falha ao buscar todos os residuos` });
        }
    }

    static async listarResiduosPorUsuario (req, res) {

        try {
          const todosResiduos = await residuos.find({usuario_id: req.params.id})
          res.status(200).json(todosResiduos);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao buscar todos os residuos` });
    }

    }

    static async deletarResiduos (req, res) {
        try {
          const id = req.params.id
          const deletarResiduo = await residuos.findByIdAndDelete(id)
          res.status(200).json(deletarResiduo);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao deletar residuo` });
        }

    }
    


}


export default ResiduosController