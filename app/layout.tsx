import { Metadata } from "next"
import Navigation from "../component/navigation"

export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: 'The best movie on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
