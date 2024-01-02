import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLoginDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly emailID:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly phoneNo:string;
}
