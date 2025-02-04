import { model, Schema } from "mongoose";


const infoModel = new Schema({
    name : {
        type : String,
        required : true,
        minlength:2,
        maxlength:25,
    },
    email :{
        type : String,
        required : true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    subject : {
        type : String,
        required : true,
        minlength:3,
        maxlength :50,
    },
    description : {
        type : String,
        required : true,
        maxlength : 500,
    },
    createdAt : {
        type : Date,
        default: Date.now,
    }
})

const modelInfo = model("infoModel",infoModel);

export default modelInfo;

