"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const blogs = {
  title: "Blogs",
  links: [
    { name: "Devverse", href: "https://devverse-astro.vercel.app/" },
    {
      name: "The Atlas Boulevard",
      href: "https://the-atlas-boulevard.vercel.app/",
    },
    {
      name: "Ich Spreche Deutsch",
      href: "https://ich-spreche-deutsch.vercel.app/",
    },
  ],
};

const aiProducts = {
  title: "AI Products",
  links: [
    { name: "Nuvonote", href: "https://nuvonote.vercel.app" },
    { name: "Workafloat AI", href: "https://workafloat-ai.vercel.app" },
    { name: "ContenGen AI", href: "https://contengen-ai.vercel.app/" },
    { name: "TerraNovoa AI", href: "https://terranovoa-ai.vercel.app/" },
    { name: "VisualAIze", href: "https://visualaize-vert.vercel.app/" },
    { name: "LernKarte AI", href: "https://lernkarte-ai.vercel.app/" },
    { name: "Geldify AI", href: "https://geldify-ai.vercel.app/" },
    { name: "PruneUrl", href: "https://prune-url.vercel.app/" },
    { name: "Resumesque AI", href: "https://resumesque-ai.vercel.app/" },
    { name: "Orqly AI", href: "https://orqly-ai.vercel.app/" },
  ],
};

const staticMenuItems: MenuItem[] = [
  { name: "Blog", href: "/" },
  { name: "About", href: "/about" },
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="https://obliviai.vercel.app/">
          <button className="hover:text-gray-900 font-medium">ObliviAI</button>
        </Link>
        {/* Blogs dropdown */}
        <div className="relative group">
          <button className="hover:text-gray-900 font-medium">
            {blogs.title}
          </button>
          <div className="absolute top-3 left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 border border-border rounded-lg shadow-lg p-2 min-w-[200px] z-50">
            {blogs.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* AI Products dropdown */}
        <div className="relative group">
          <button className="hover:text-gray-900 font-medium">
            {aiProducts.title}
          </button>
          <div className="absolute left-0 top-3 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 border border-border rounded-lg shadow-lg p-2 min-w-[200px] z-50">
            {aiProducts.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="space-y-4">
                {/* Static menu items */}
                {staticMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Blogs mobile dropdown */}
                <details className="w-full">
                  <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300">
                    {blogs.title}
                  </summary>
                  <div className="mt-2 space-y-1">
                    {blogs.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* AI Products mobile dropdown */}
                <details className="w-full">
                  <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300">
                    {aiProducts.title}
                  </summary>
                  <div className="mt-2 space-y-1">
                    {aiProducts.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </details>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <Link href="/">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          {config.blog.name}
        </h1>
      </Link>
      <Navigation />
    </section>
  );
};
