import mongoose from "mongoose";

const residuosSchema = new mongoose.Schema({
    tipo_residuo: { type: String, required: true },
    qtd_residuo: { type: Number, required: true },
    dta_cadastro: { type: Date, default: Date.now },
    nivel_risco: { type: String },
    imagem_residuo: { type: String },
    usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { versionKey: false });

const Residuos = mongoose.model("Residuos", residuosSchema);

export default Residuos;
