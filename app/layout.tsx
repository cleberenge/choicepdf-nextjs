import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-XXXXXXXXXXXX",
            enable_page_level_ads: true
          });`
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}