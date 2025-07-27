import "./globals.css"

export const metadata = {
  title: "Fateme Adiban — Freelance Web Designer and Developer",
  description: "I design stunning, high-converting sites that align with your business goals, helping you stand out and scale effectively."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
