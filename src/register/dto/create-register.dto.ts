import { IsBoolean, IsIn, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateRegisterDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    readonly carNo:string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly carName: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly ownerName: string;
    
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    readonly address: string;

    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    readonly location: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['petrol', 'diesel', 'electric', 'hybrid'])
    readonly engine: string;

    // @IsNumber()
    // @IsNotEmpty()
    // readonly price:number;

    @IsMongoId()
    @IsNotEmpty()
    @IsOptional()
    readonly UserID:string;

    // @IsBoolean()
    // @IsNotEmpty()
    // @IsIn([true, false])
    // readonly status: boolean;

    readonly file:any;
}
