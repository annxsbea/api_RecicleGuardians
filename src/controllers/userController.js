import user from "../models/User.js";
import bcrypt from 'bcrypt';


class UserController {

    static async cadastrarUser (req, res) {
        try {
          const novoUser = await user.create(req.body);
          res.status(201).json({ message: "criado com sucesso", novoUser });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar user` });
        }
      }
     
    static async listarUser (req, res) {
        try {
          const todosUsers = await user.find()
          res.status(200).json(todosUsers);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao buscar todos os autores` });
        }
      }
    
      static async loginUser(req, res) {
        const { email_user, senha_user } = req.body;
    
        try {
            const loginUser = await user.findOne({ email_user });
    
            if (!loginUser) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
    
            // Comparar senhas
            const isMatch = await bcrypt.compare(senha_user, loginUser.senha_user);
    
            if (!isMatch) {
                return res.status(401).json({ message: 'E-mail ou senha inválidos' });
            }
    
            //  Gerar um JWT aqui
            // const token = jwt.sign({ id: loginUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
            res.status(200).json({
                message: 'Login bem-sucedido',
                // token // Inclua o token se estiver usando JWT
            });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao fazer login` });
        }
    }

    static async buscarUserPorId (req, res) {
        try {
          const id = req.params.id
          const buscarUser = await user.findById(id)
          res.status(200).json(buscarUser);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao buscar autor` });
        }
        }
    static async deletarUser (req, res) {
        try {
          const id = req.params.id
          const deletarUser = await user.findByIdAndDelete(id)
          res.status(200).json({ message: `deletado com sucesso`, deletarUser });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao deletar autor` });

        }
      }
    
    static async atualizarUser (req, res) {
        try {
          const id = req.params.id
          const atualizarUser = await user.findByIdAndUpdate(id, req.body)
          res.status(200).json({ message: `atualizado com sucesso`, atualizarUser });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao atualizar autor` });
        }
      }
    
    static async buscarUser (req, res) {
        try {
          const id = req.params.id
          const buscarUser = await user.findById(id)
          res.status(200).json(buscarUser);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao buscar autor` });
        }
      }
    
    static async 
}


export default UserController