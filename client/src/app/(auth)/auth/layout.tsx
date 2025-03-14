import "../../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
