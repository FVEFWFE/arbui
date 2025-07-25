"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Search,
  MessageCircle,
  Shield,
  CheckCircle,
  Truck,
  Star,
  Eye,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  Zap,
  Headphones,
  Bike,
  DrillIcon as Drone,
  Heart,
  Battery,
  Gem,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function MarketplaceLanding() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const heroProducts = [
    {
      name: "Apple Vision Pro",
      price: "$3,499",
      image: "/placeholder.svg?height=400&width=600",
      seller: "TechVault Pro",
      badge: "VERIFIED",
    },
    {
      name: "KEF Blade Two Meta",
      price: "$28,000",
      image: "/placeholder.svg?height=400&width=600",
      seller: "AudioPhile Elite",
      badge: "CHARTER",
    },
    {
      name: "Bluetti AC500 + B300S",
      price: "$4,999",
      image: "/placeholder.svg?height=400&width=600",
      seller: "PowerTech Solutions",
      badge: "VERIFIED",
    },
  ]

  const categories = [
    { name: "High-End Electronics", icon: Zap, count: "847 items", brands: "Apple, Sony, Samsung" },
    { name: "Pro Audio/Visual", icon: Headphones, count: "423 items", brands: "Focal, KEF, SUSVARA" },
    { name: "Elite E-Bikes", icon: Bike, count: "156 items", brands: "Biktrix, Specialized" },
    { name: "Professional Drones", icon: Drone, count: "89 items", brands: "DJI Inspire 3, Autel" },
    { name: "Wellness Tech", icon: Heart, count: "234 items", brands: "Joovv, Peloton, NormaTec" },
    { name: "Power Solutions", icon: Battery, count: "178 items", brands: "Bluetti, Goal Zero" },
    { name: "Luxury Collectibles", icon: Gem, count: "312 items", brands: "Limited Editions" },
  ]

  const featuredProducts = [
    {
      name: "Sony FX9 Full-Frame Camera",
      price: "$11,998",
      originalPrice: "$13,500",
      image: "/placeholder.svg?height=300&width=300",
      seller: "CineTech Pro",
      rating: 4.9,
      stock: 2,
      badges: ["UPS Insured", "Live Chat"],
      soldOut: false,
    },
    {
      name: "PS5 Dev Kit",
      price: "$8,999",
      image: "/placeholder.svg?height=300&width=300",
      seller: "DevKit Vault",
      rating: 5.0,
      stock: 0,
      badges: ["Signature Required"],
      soldOut: true,
    },
    {
      name: "Specialized Turbo Creo SL",
      price: "$12,500",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Elite Cycles",
      rating: 4.8,
      stock: 1,
      badges: ["UPS Insured", "Live Chat"],
      soldOut: false,
    },
    {
      name: "DJI Inspire 3",
      price: "$16,499",
      image: "/placeholder.svg?height=300&width=300",
      seller: "AerialPro Solutions",
      rating: 4.9,
      stock: 3,
      badges: ["Signature Required", "Live Chat"],
      soldOut: false,
    },
  ]

  const trustLogos = ["Coinbase Commerce", "BitPay", "Affirm", "Klarna", "Route Protection"]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length)
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">ArbVault</span>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs">
                  BETA
                </Badge>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sellers
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Support
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search verified products..."
                  className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent hidden md:inline-flex"
              >
                Sign In
              </Button>
              <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Join Now</Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search verified products..."
                    className="pl-10 bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <nav className="flex flex-col space-y-2">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  >
                    Categories
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  >
                    Sellers
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  >
                    How It Works
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  >
                    Support
                  </a>
                </nav>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                  >
                    Sign In
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Join Now</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  The Premier Marketplace for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Authenticated High-Value Goods
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Connecting verified sellers with discerning collectors. Every transaction protected.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  SecureHold Escrow 🛡️
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  ID.me Verified Sellers ✅
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
                  <Truck className="w-4 h-4 mr-2" />
                  Same-Day Shipping
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Shop Verified Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
                >
                  Become a Seller
                </Button>
              </div>
            </div>

            {/* Product Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-8">
                <div className="relative h-96">
                  {heroProducts.map((product, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentSlide
                          ? "opacity-100 transform translate-x-0"
                          : "opacity-0 transform translate-x-full"
                      }`}
                    >
                      <div className="text-center space-y-4">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                          <p className="text-3xl font-bold text-blue-400">{product.price}</p>
                          <div className="flex items-center justify-center space-x-2">
                            <Badge
                              className={`${product.badge === "CHARTER" ? "bg-purple-500/20 text-purple-400" : "bg-green-500/20 text-green-400"}`}
                            >
                              {product.badge}
                            </Badge>
                            <span className="text-gray-600 dark:text-gray-300">by {product.seller}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300/80 dark:bg-gray-800/80 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300/80 dark:bg-gray-800/80 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-blue-500" : "bg-gray-400 dark:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Trust Logos */}
            <div className="flex items-center space-x-8 overflow-x-auto">
              {trustLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 text-gray-400 font-medium whitespace-nowrap">
                  {logo}
                </div>
              ))}
            </div>

            {/* Live Stats */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Users className="w-4 h-4 text-blue-400" />
                <span>2,847 Verified Sellers</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span>$12.3M Protected Transactions</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>99.8% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Categories</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Discover premium products across our verified categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{category.count}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{category.brands}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Power User Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <Card className="bg-white/90 dark:bg-gray-900/80 border-purple-500/30 backdrop-blur">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Dex Volkov"
                      className="w-20 h-20 rounded-full border-2 border-purple-500"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dex Volkov</h3>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">CHARTER SELLER</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Get my book FREE with your first transaction
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      "The High-Value Collector's Guide" - Available to members with 1+ reputation
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">View Dex's Collection</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Featured Products</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
                      <span className="text-gray-900 dark:text-white">MacBook Pro M3 Max</span>
                      <Badge className="bg-green-500/20 text-green-400">SOLD</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
                      <span className="text-gray-900 dark:text-white">PS5 Dev Kit</span>
                      <Badge className="bg-red-500/20 text-red-400">SOLD OUT</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
                      <span className="text-gray-900 dark:text-white">DJI Inspire 3</span>
                      <Badge className="bg-blue-500/20 text-blue-400">AVAILABLE</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Premium Products</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Handpicked high-value items from verified sellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                {product.soldOut && (
                  <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
                    <Badge className="bg-red-500/20 text-red-400 text-lg px-4 py-2">SOLD OUT</Badge>
                  </div>
                )}

                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex flex-col space-y-1">
                      {product.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} className="bg-blue-500/20 text-blue-400 text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">by {product.seller}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
                      </div>
                    </div>

                    {product.stock > 0 && <p className="text-sm text-amber-400">Only {product.stock} left in stock</p>}

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={product.soldOut}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Trust & Security</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Your protection is our priority</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-100 to-white dark:from-green-950 dark:to-gray-900 border-green-500/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SecureHold Escrow Protection</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Funds secured until delivery confirmed. Your money stays safe throughout the entire transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-white dark:from-blue-950 dark:to-gray-900 border-blue-500/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Verified Seller Network</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Government ID verification required. Every seller undergoes thorough background checks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-100 to-white dark:from-purple-950 dark:to-gray-900 border-purple-500/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Buyer Protection Guarantee</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full refund dispute resolution. Our team ensures fair outcomes for all transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950">
        <div className="container mx-auto px-4">
          <Card className="bg-white/90 dark:bg-gray-900/80 border-blue-500/30 backdrop-blur max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join ArbVault</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Get 5% off your first order</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input
                  placeholder="Enter your email address"
                  className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">Subscribe</Button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Extra 5% off when paying with Bitcoin</p>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300 underline">
                How to Safely Acquire Bitcoin →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">ArbVault</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The premier marketplace for authenticated high-value goods.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                >
                  Members-Only Discord
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Quick Rules
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Our Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Seller Verification
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Dispute Resolution
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 ArbVault. All rights reserved. Built for collectors, by collectors.</p>
          </div>
        </div>
      </footer>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full w-14 h-14 shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
