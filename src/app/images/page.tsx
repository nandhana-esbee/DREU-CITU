import { FileListPage } from "@/components/file-list-page";
import { getFilesForPage } from "@/lib/files-data";

export default function ImagesPage() {
  const files = getFilesForPage("images");
  return <FileListPage title="Images" files={files} />;
}
