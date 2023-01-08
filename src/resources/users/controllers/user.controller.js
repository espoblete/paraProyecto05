const user = require("../models/user.model")

const findAll = async (req, res) => {
   try {
    const users = await user.find();
    return res.json({users})
   } catch (error) {
    return res.status(500).json({
        "msg": "error 500, entre teclado y asiento de desarrollador/a",
        "details": error.message
    })
   }
}

const signup = async (req, res) => {
    try {
        const u = new user(req.body);
        u.hashPassword(req.body.password);
        const result = await user.create(u);        
        return res.json({
            "msg":"usuario creado",
            "details": result
        });
    } catch (error) {
    return res.status(500).json({
        "msg": "error 500, entre teclado y asiento de desarrollador/a",
        "details": error.message
    });
    }
}
module.exports = {findAll, signup};