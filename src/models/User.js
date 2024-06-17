import mongoose from "mongoose";

import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  nome_user: { type: String, required: true },
  email_user: { type: String, unique: true, sparse: true }, 
  senha_user: { type: String, required: true },
  dta_cadastro: { type: Date, default: Date.now },
  pontos_acumulados: { type: Number, default: 0 },
  reciclagens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Residuos' }] 
}, { versionKey: false });




userSchema.pre('save', async function(next) {
    if (this.isModified('senha_user') || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.senha_user = await bcrypt.hash(this.senha_user, salt);
    }
    next();
  });
const User = mongoose.model("User", userSchema);

export default{ User, userSchema };
