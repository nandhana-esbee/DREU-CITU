import data from './files-data.json';

export type FileData = {
  id: string;
  name: string;
  url: string;
  size: string;
};

type PageFiles = {
  page: string;
  files: FileData[];
};

const allFiles: PageFiles[] = data.pageFiles;

export function getFilesForPage(page: string): FileData[] {
  return allFiles.find((p) => p.page === page)?.files || [];
}
