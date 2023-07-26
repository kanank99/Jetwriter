import './globals.css'

export const metadata = {
  title: 'Jetwriter - AI Writing Assistant',
  description: 'Jetwriter is an AI writing assistant that helps you write better, faster.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
