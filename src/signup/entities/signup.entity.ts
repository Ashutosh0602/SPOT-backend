import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
const Cryptr = require('cryptr');

@Schema()
export class Signup {
    @Prop({required:true, length:50, type:String,})
    name:{type:string};

    @Prop({required:true,unique:true, type:String,})
    uid:{type:string};

    @Prop({required:true, length:200, type:String})
    address:string;

    @Prop({required:true, unique:true, type:String})
    phoneNo:string;

    @Prop({required:true, unique:true, type:String})
    emailId:string;

    @Prop({type:Boolean, default:false})
    phoneVerified:boolean;

    @Prop({type:Boolean, default:false})
    emailVerified:boolean;
}

export const UserSchema=SchemaFactory.createForClass(Signup);

UserSchema.post('save', function(){
    const cryptr = new Cryptr(process.env['CRPYTR'], { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });
    this.phoneNo=cryptr.encrypt(this.phoneNo);
    this.emailId=cryptr.encrypt(this.emailId);
    // next();
})

export type userDoc=Signup & Document;