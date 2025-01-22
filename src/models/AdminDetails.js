const {Schema, model, models} = require("mongoose");
const AdminDetailsSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    secretKey:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
});

const AdminDetails = models.AdminDetails || model('AdminDetails',AdminDetailsSchema);

export default AdminDetails;