import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body>
        <p>
          <Link href="/">Logo</Link>
        </p>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/foo">Foo</Link>
          </nav>
        </header>
        <main style={{ border: "1px solid black", padding: 10 }}>
          <small>main layout</small>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
