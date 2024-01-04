import { IsBoolean, IsDefined, IsIn, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

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

    @IsString()
    @IsNotEmpty()
    readonly price:string;

    @IsDefined()
    @IsNotEmpty()
    readonly UserID:string;

    @IsString()
    @IsNotEmpty()
    @IsIn(["true", "false"])
    readonly status: string;

    readonly file:any;
}
