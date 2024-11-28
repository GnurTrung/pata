import "./globals.css";

const title = "We are getting married!";
const desc =
  "Wedding invitation";
const img = "/assets/images/chew/bg.JPG";

export const metadata = {
  title: title,
  description: desc,
  keywords: ["wedding", "tam", "khuong"],
  openGraph: {
    title: title,
    description: desc,
    images: img,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
