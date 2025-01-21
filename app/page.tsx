'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-fuchsia-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B0764,transparent)]" />
      </div>
      {/* Glass Morphism Header */}
      <section className="container mx-auto pt-20 pb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl -z-10" />
        <h1 className="text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-300 to-purple-400 animate-pulse">
          Digital Art Journal
        </h1>
        <div className="flex justify-center gap-3 flex-wrap">
          <Badge className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm">
            maximalist
          </Badge>
          <Badge className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm">
            eclectic
          </Badge>
          <Badge className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm">
            artistic
          </Badge>
        </div>
      </section>
      {/* Modern Carousel */}
      <section className="container mx-auto mb-24">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item}>
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="aspect-[21/9] rounded-lg relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-2xl font-bold text-white/90 tracking-wider">Featured Art {item}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20" />
          <CarouselNext className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20" />
        </Carousel>
      </section>
      {/* Dynamic Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((entry) => (
            <Card 
              key={entry}
              className={`
                relative overflow-hidden transition-all duration-500 ease-out
                ${hoveredCard === entry ? 'scale-105 z-10' : 'scale-100 z-0'}
                bg-white/5 backdrop-blur-lg border border-white/10
              `}
              onMouseEnter={() => setHoveredCard(entry)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-75" 
                       style={{
                         transform: hoveredCard === entry ? 'scale(1.1)' : 'scale(1)',
                         transition: 'transform 0.5s ease-out'
                       }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(0,0,0,0.8)_100%)]" />
                </div>
                <ScrollArea className="h-24">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    Art Entry #{entry}
                  </h3>
                  <p className="text-white/70">
                    Your artistic journey and thoughts go here. Express yourself freely in this maximalist space.
                  </p>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Modern Floating Button */}
      <div className="fixed bottom-8 right-8">
        <Button 
          className="w-16 h-16 rounded-full relative group overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #7C3AED, #DB2777)',
          }}
        >
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="text-2xl relative z-10">+</span>
        </Button>
      </div>
    </main>
  )
}