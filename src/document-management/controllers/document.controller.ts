import { Body, Controller, Post, Res } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { DocumentDto } from '../dto/document.dto';
import { DocumentRepoService } from '../services/document-repo.service';
import { Response } from 'express';

@Controller({ path: 'document' })
export class DocumentController {
  constructor(private readonly documentRepo: DocumentRepoService) {}

  @FormDataRequest()
  @Post('upload')
  public async uploadFile(
    @Body() documentDto: DocumentDto,
    @Res() res: Response,
  ) {
    await this.documentRepo.handleDocument({
      name: documentDto.document.originalName,
      path: documentDto.document.path,
    });

    res.redirect(`/dashboard?isUploaded=true`);
  }
}
