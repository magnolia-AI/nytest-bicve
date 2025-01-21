'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFE5E5] dark:bg-[#1a1a1a] p-8">
      {/* Header Section */}
      <section className="container mx-auto mb-12">
        <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Digital Art Journal
        </h1>
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-purple-200 dark:bg-purple-900">maximalist</Badge>
          <Badge variant="secondary" className="bg-pink-200 dark:bg-pink-900">eclectic</Badge>
          <Badge variant="secondary" className="bg-orange-200 dark:bg-orange-900">artistic</Badge>
        </div>
      </section>
      {/* Featured Art Carousel */}
      <section className="container mx-auto mb-16">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item}>
                <Card className="bg-white/80 dark:bg-black/50 border-2 border-purple-300 dark:border-purple-800">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-pink-300 to-purple-400 rounded-lg flex items-center justify-center">
                      <p className="text-white text-xl">Art Entry {item}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      {/* Art Journal Grid */}
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((entry) => (
            <Card key={entry} className="overflow-hidden hover:scale-105 transition-transform duration-200 bg-white/90 dark:bg-black/70 border-2 border-pink-200 dark:border-pink-800">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 bg-gradient-to-bl from-orange-300 via-pink-400 to-purple-500 rounded-lg" />
                <ScrollArea className="h-24">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Art Entry #{entry}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your artistic journey and thoughts go here. Express yourself freely in this maximalist space.
                  </p>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Add Entry Button */}
      <div className="fixed bottom-8 right-8">
        <Button className="rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg">
          <span className="text-2xl">+</span>
        </Button>
      </div>
    </main>
  )
}