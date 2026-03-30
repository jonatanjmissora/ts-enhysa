
import { FileUpload, FileUploadDropzone, FileUploadItem, FileUploadItemDelete, FileUploadItemMetadata, FileUploadItemPreview, FileUploadList, FileUploadTrigger } from "@/components/ui/file-upload"
import { Button } from "@/components/ui/button"
import { CloudUpload, X } from "lucide-react"

export const InputFiles = ({ text, files, setFiles, maxFiles = 4 }: { text: string; files: File[]; setFiles: (files: File[]) => void; maxFiles?: number }) => {
	
	return (
		<article className="w-full">
		{ files.length < maxFiles  && (	<FileUpload
      maxFiles={maxFiles}
      maxSize={5 * 1024 * 1024}
      className="w-full px-4"
      value={files}
      onValueChange={setFiles}
      multiple
    >
	
      <FileUploadDropzone className="flex flex-col items-center justify-center border-dotted-2 text-center gap-0 py-2 w-full">
        <div className="flex items-center justify-center gap-2 w-full">
		<CloudUpload className="size-6" />
        <span className="text-lg">Ingresa</span>
        <FileUploadTrigger asChild>
          <Button variant="link" className="h-auto p-0 text-lg">
            imágenes
          </Button>
        </FileUploadTrigger>
        <span className="text-lg">{text}</span>
	  </div>
	  <p className="text-sm tracking-wide text-foreground/50 italic">hasta {maxFiles} archivos de menos de 5MB</p>
      </FileUploadDropzone>
    </FileUpload>
	)}
	<FileUpload
      maxFiles={maxFiles}
      maxSize={5 * 1024 * 1024}
      className="w-full"
      value={files}
      onValueChange={setFiles}
      multiple
    >
			<FileUploadList className="flex flex-row flex-wrap">
        {files.map((file, index) => (
          <FileUploadItem key={index} value={file}>
            <FileUploadItemPreview />
            <FileUploadItemMetadata />
            <FileUploadItemDelete asChild>
              <Button variant="ghost" size="icon" className="size-7">
                <X className="size-4" />
              </Button>
            </FileUploadItemDelete>
          </FileUploadItem>

        ))}
      </FileUploadList>
	</FileUpload>
		</article>
	)
}