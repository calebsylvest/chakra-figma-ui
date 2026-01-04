import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Chakra UI v3 + Next.js",
  description: "Next.js 15 with Chakra UI v3 and MCP integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
