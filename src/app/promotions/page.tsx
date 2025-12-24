import { FileListPage } from "@/components/file-list-page";
import { getFilesForPage } from "@/lib/files-data";

export default function PromotionsPage() {
  const files = getFilesForPage("promotions");
  return <FileListPage title="Promotions" files={files} />;
}
