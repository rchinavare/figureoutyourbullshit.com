import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  price: string
  imageSrc: string
  imageAlt: string
  buyLink: string
}

export default function ProductCard({ title, description, price, imageSrc, imageAlt, buyLink }: ProductCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <div className="relative h-64 w-full bg-gray-800 flex items-center justify-center p-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={220}
          height={220}
          className="object-contain"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title.replace("FOYB", "FOYB™")}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        <p className="text-xl font-bold">{price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a href={buyLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-white text-black hover:bg-gray-200">Buy Now</Button>
        </a>
      </CardFooter>
    </Card>
  )
}
