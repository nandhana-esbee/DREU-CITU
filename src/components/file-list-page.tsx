"use client";

import {
  ArrowLeft,
  ChevronRight,
  Download,
  File as FileIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { FileData } from "@/lib/files-data";

type FileListPageProps = {
  title: string;
  files: FileData[];
};

export function FileListPage({ title, files }: FileListPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-card border-b p-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-foreground">{title}</span>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/">
                    <ArrowLeft />
                    <span className="sr-only">Back</span>
                  </Link>
                </Button>
                {title}
              </CardTitle>
              <CardDescription>
                Select a file to download it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {files.length > 0 ? (
                <div className="grid gap-4">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="flex items-center gap-4">
                        <FileIcon className="w-8 h-8 text-primary" />
                        <div>
                          <p className="font-semibold">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {file.size}
                          </p>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="icon">
                        <a href={file.url} download>
                          <Download />
                          <span className="sr-only">Download</span>
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No files available for this section yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
