import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, fetch from your DB. This is a dynamic endpoint replacing hardcoded data.
  const heroProducts = [
    {
      name: "Apple Vision Pro",
      slug: "apple-vision-pro",
      href: "/products/apple-vision-pro",
      price: 3499,
      originalPrice: 3999,
      image: "/placeholder.svg?height=400&width=600",
      seller: "TechVault Pro",
      badge: "VERIFIED PRO",
    },
    {
      name: "KEF Blade Two Meta",
      slug: "kef-blade-two-meta",
      href: "/products/kef-blade-two-meta",
      price: 28000,
      originalPrice: 32000,
      image: "/placeholder.svg?height=400&width=600",
      seller: "AudioPhile Elite",
      badge: "FOUNDING SELLER",
    },
    {
      name: "Bluetti AC500 + B300S",
      slug: "bluetti-ac500-b300s",
      href: "/products/bluetti-ac500-b300s",
      price: 4999,
      originalPrice: 5499,
      image: "/placeholder.svg?height=400&width=600",
      seller: "PowerTech Solutions",
      badge: "VERIFIED PRO",
    },
  ]

  return NextResponse.json(heroProducts)
}
