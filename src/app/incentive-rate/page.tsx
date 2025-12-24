import { FileListPage } from "@/components/file-list-page";
import { getFilesForPage } from "@/lib/files-data";

export default function IncentiveRatePage() {
  const files = getFilesForPage("incentive-rate");
  return <FileListPage title="Incentive Rate" files={files} />;
}
