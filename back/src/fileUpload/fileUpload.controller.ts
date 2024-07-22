import { Controller, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileUploadService } from "./fileUpload.service";
import { AuthGuard } from "src/Auth/AuthGuard/auth.guard";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("files")
@Controller("files")
export class FileUploadController {
constructor(private readonly fileUploadService: FileUploadService){}

    @Post("/uploadImage/:id")
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("file"))
    uploadImage(@Param("id") productId: string,
    @UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({
                    maxSize: 200000,
                    message: "Exceeds the allowed range, 200kb."
                })
            ]
        })
    ) file: Express.Multer.File,
){
    return this.fileUploadService.uploadImage(file, productId)
    }
}