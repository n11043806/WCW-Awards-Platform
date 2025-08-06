import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { JudgesSidebar } from "@/components/judges/judges-sidebar"

export default function JudgesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <JudgesSidebar />
        <main className="flex-1 bg-gray-50">{children}</main>
      </div>
    </SidebarProvider>
  )
}
            
    