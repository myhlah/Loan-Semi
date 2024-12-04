const mongoose = require('mongoose');

const ComakerSchema = new mongoose.Schema({
    branch:
    {
        type: String,
        enum: ['Tibanga-Main', 'Pala-o', 'Buru-un', 'Kiwalan', 'Poblacion', 'Suarez-Tominobo', 'Tubod Iligan'],
        required: true
    },
    applicationDate: {
        type: Date,
        required: true
    },
    comakerName:{
        type:String,
        required: true
    },
    emailAddress:{
        type:String,
        required: true
    },
    permanentAddress:{
        type:String,
        required: true
    },
    presentAddress:{
        type:String,
        required: true
    },
    telMob:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    sex:{
        type:String,
        enum: ['female','male'],
        required: true
    },
    civilStatus:{
        type:String,
        enum: ['single','married','widowed'],
        required: true
    },
    spouseName:{
        type:String,
    },
    residentStatus:{
        type:String,
        enum:['owned','free of use','renting'],
        required: true
    },
    amortization:{
        type:Number,
        required: true
    },
    employer:{
        type:String,
    },
    businessAdd:{
        type:String,
    },
    empStatus:{
        type:String,
    },
    lengthService:{
        type:Number,
    },
    annualSalary:{
        type:Number,
    },
    firm:{
        type:String,
    },
    businessAdd2:{
        type:String,
    },
    natureBus:{
        type:String,
    },
    soleOwner:{
        type:String,
    },
    capitalInvest:{
        type:Number,
    },
    outstandingObligations:{
        type:String,
    },
    properties:{
        type:String,
    },
    relationship:{
        type:String,
        required: true
    },
    yearsKnown:{
        type:Number,
        required: true
    },
    memberSig: {
        data: { type: Buffer, required: true }, // The buffer is required
        contentType: { type: String, required: true }, // The contentType is required
    },

})

const ComakerModel = mongoose.model('Comaker', ComakerSchema);

module.exports = ComakerModel;