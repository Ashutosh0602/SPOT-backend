import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateSignupDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    // @IsString()
    // @IsNotEmpty()
    // readonly uid: string;

    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    readonly address: string;
    
    @IsString()
    @IsNotEmpty()
    readonly phoneNo: string;

    @IsString()
    @IsNotEmpty()
    readonly gender: string;

    @IsString()
    @IsNotEmpty()
    readonly emailId: string;

    @IsOptional()
    @IsBoolean()
    readonly phoneVerification: boolean;
    
    @IsOptional()
    @IsBoolean()
    readonly emailVerification: boolean
}
