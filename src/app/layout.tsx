import './globals.css'
import '../App.css'

export const metadata = {
  title: 'aiKODA - Cultural Intelligence Platform',
  description: 'Enterprise Cultural Intelligence Platform for Japanese Market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}