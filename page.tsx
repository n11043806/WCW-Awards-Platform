import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="relative z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center">
                <span className="text-pink-500 font-bold text-xl">W</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-pink-500 cursor-pointer">
                <span className="font-medium">GLOBAL AWARDS</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-pink-500 cursor-pointer">
                <span className="font-medium">AMERICAS WCW AWARDS</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-pink-500 cursor-pointer">
                <span className="font-medium">MENA WCW AWARDS</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="text-gray-700 hover:text-pink-500 cursor-pointer">
                <span className="font-medium">AWARDS CATEGORIES</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-pink-500 cursor-pointer">
                <span className="font-medium">THE WOMEN CHANGING THE WORLD</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="text-gray-700 hover:text-pink-500 cursor-pointer">
                <span className="font-medium">ABOUT US</span>
              </div>
            </nav>

            {/* CTA Button */}
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium">
              REGISTER HERE FOR THE GLOBAL SUMMIT & AWARDS
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/eiffel-tower-bg.jpg"
            alt="Eiffel Tower at dusk with city lights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className="text-pink-500">Women</span>
                  <br />
                  <span>Changing</span>
                  <br />
                  <span>The World</span>
                  <br />
                  <span>Awards</span>
                </h1>

                <div className="inline-block">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-medium bg-transparent"
                  >
                    2026 GLOBAL SUMMIT AND AWARDS
                    <br />
                    <span className="text-sm">24-26 APRIL 2026</span>
                  </Button>
                </div>
              </div>

              {/* Right Content - Award Winner */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative Stars */}
                  <Star className="absolute -top-8 -left-8 w-6 h-6 text-pink-400 fill-current" />
                  <Star className="absolute top-12 -right-12 w-8 h-8 text-pink-300 fill-current" />
                  <Star className="absolute -bottom-4 left-8 w-5 h-5 text-pink-500 fill-current" />
                  <Star className="absolute bottom-16 -right-8 w-7 h-7 text-pink-400 fill-current" />

                  {/* Award Winner Image Placeholder */}
                  <div className="w-80 h-96 bg-gradient-to-b from-pink-500/20 to-transparent rounded-lg flex items-end justify-center p-8">
                    <div className="text-center text-white">
                      <div className="w-16 h-20 bg-yellow-400 rounded-t-lg mx-auto mb-4 flex items-center justify-center">
                        <Star className="w-8 h-8 text-yellow-600 fill-current" />
                      </div>
                      <p className="text-sm opacity-80">Award Winner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-300 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-500" />
      </div>
    </div>
  )
}
