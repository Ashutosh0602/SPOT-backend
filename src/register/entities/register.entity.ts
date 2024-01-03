import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Signup } from "src/signup/entities/signup.entity";

@Schema()
export class Register {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' })
    uid: Signup;

    @Prop({required:true,unique:true, length:50, type:String,})
    carNo:{type:string};

    @Prop({required:true, type:String,})
    carName:{type:string};

    @Prop({required:true, length:200, type:String})
    ownerName:string;

    @Prop({required:true, length:300, type:String})
    address:string;

    @Prop({required:true, type:String})
    location:string;

    @Prop({required:true, type:String})
    engine:string;

    @Prop({required:true, type:String})
    price:string;

    @Prop({required:true, type:String})
    status:string;
}

export const VehicleSchema=SchemaFactory.createForClass(Register);

export type vehicleDoc=Register & Document;