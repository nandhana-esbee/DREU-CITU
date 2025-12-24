import { FileListPage } from "@/components/file-list-page";
import { getFilesForPage } from "@/lib/files-data";

export default function QrCodesPage() {
  const files = getFilesForPage("qr-codes");
  return <FileListPage title="RH/PER QR Codes" files={files} />;
}
