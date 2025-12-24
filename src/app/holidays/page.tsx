import { FileListPage } from "@/components/file-list-page";
import { getFilesForPage } from "@/lib/files-data";

export default function HolidaysPage() {
  const files = getFilesForPage("holidays");
  return <FileListPage title="Holidays List" files={files} />;
}
