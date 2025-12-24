import { FileListPage } from "@/components/file-list-page";
import { getFilesForPage } from "@/lib/files-data";

export default function PayChartPage() {
  const files = getFilesForPage("pay-chart");
  return <FileListPage title="Pay Chart" files={files} />;
}
