import { FileSystemStoredFile, IsFile } from 'nestjs-form-data';

export class DocumentDto {
  @IsFile()
  public document: FileSystemStoredFile;
}
