"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UnderMaintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-background">
      <div className="bg-card p-8 rounded-lg shadow-xl border">
        <Wrench className="w-20 h-20 text-primary mb-6 mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-headline">Page Under Maintenance</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          We're working hard to bring you this content. Please check back later.
        </p>
        <Button asChild size="lg">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
