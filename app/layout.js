import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body style={{ padding: 20 }}>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/foo">Foo</Link>
          </nav>
        </header>
        <main style={{ border: "1px solid black", padding: 10, marginTop: 10 }}>
          <small>root layout</small>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
