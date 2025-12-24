import { FileListPage } from "@/components/file-list-page";
import { getFilesForPage } from "@/lib/files-data";

export default function NrhOpTimingPage() {
  const files = getFilesForPage("nrh-op-timing");
  return <FileListPage title="NRH OP Timing" files={files} />;
}
