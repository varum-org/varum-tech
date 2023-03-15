import './globals.css'

export const metadata = {
  title: 'Varum Tech',
  description: 'Varum Tech - Varum Store - Varum Ngontu',
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
