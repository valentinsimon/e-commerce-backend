import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength, IsEmail, Matches, IsOptional, Validate, IsEmpty } from 'class-validator';
import { matchpassword } from 'src/Decorators/matchPassword.decorator';

export class CreateUserDto {

    id: string


    @ApiProperty({
        description: 'The name must contain between 3 and 50 characters',
        example: 'Charles',
      })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    @Matches(/^[A -Za -z]+$/, {
      message: "Only letters"
    })
    name: string;


    @ApiProperty({
        description: 'Your passwords must match',
        example: 'aaBB11!!',
      })
    @IsNotEmpty()
    @Validate(matchpassword, ["password"])
    confirmPassword: string;


    @ApiProperty({
        description: 'Should be with a e-mail format',
        example: 'charles@email.com',
      })
    @IsNotEmpty()
    @IsEmail()
    email: string;


    @ApiProperty({
        description: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one of the following special characters: !@#$%^&*; and have a minimum length of 8 and maximum of 15 characters',
        example: 'aaBB11!!',
      })
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/, {
        message: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one of the following special characters: !@#$%^&*; and have a minimum length of 8 and maximum of 15 characters.'
    })
    password: string;


    @ApiProperty({
        description: 'The adress must contain between 3 and 80 characters',
        example: 'Bourbon St 321',
      })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;


    @ApiProperty({
        description: 'The country must contain between 5 and 20 characters',
        example: 'Scotland',
      })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country: string;


    @ApiProperty({
        description: 'The city must contain between 5 and 20 characters',
        example: 'Edinburgh',
      })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;


    @ApiProperty({
        description: 'Sould be a number',
        example: '155678976',
      })
    @IsNotEmpty()
    phone: string; 

    @ApiHideProperty()
    @IsEmpty()
    isAdmin: boolean;

}


export class UpdateUserDto{
    id: string


    @ApiProperty({
        description: 'The name must contain between 3 and 80 characters',
        example: 'Charles',
      })
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;


    @ApiProperty({
        description: 'Should be with a e-mail format',
        example: 'charles@email.com',
      })
    @IsOptional()
    @IsEmail()
    email: string;


    @ApiProperty({
        description: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one of the following special characters: !@#$%^&*; and have a minimum length of 8 and maximum of 15 characters',
        example: 'aaBB11!!',
      })
    @IsOptional()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/, {
        message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*; y tener una longitud mínima de 8 y máxima de 15 caracteres.'
    })
    password: string;


    @ApiProperty({
        description: 'The name must contain between 3 and 80 characters',
        example: 'Bourbon St 321',
      })
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;


    @ApiProperty({
        description: 'The country must contain between 5 and 20 characters',
        example: 'Scotland',
      })
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country: string;


    @ApiProperty({
        description: 'The city must contain between 5 and 20 characters',
        example: 'Edinburgh',
      })
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;


    @ApiProperty({
        description: 'Sould be a number',
        example: '155678976',
      })
    @IsOptional()
    phone: number; 

}

export class LoginUserDto{
    
    @ApiProperty({
        description: 'Should be with a e-mail format',
        example: 'charles@email.com',
      })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    
    @ApiProperty({
        description: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one of the following special characters: !@#$%^&*; and have a minimum length of 8 and maximum of 15 characters',
        example: 'aaBB11!!',
      })
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/, {
        message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*; y tener una longitud mínima de 8 y máxima de 15 caracteres.'
    })
    password: string;
}