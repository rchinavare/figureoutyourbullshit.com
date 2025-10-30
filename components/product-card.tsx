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
  imageSize?: number
  imageClassName?: string
  secondImageSrc?: string
  secondImageAlt?: string
}

export default function ProductCard({
  title,
  description,
  price,
  imageSrc,
  imageAlt,
  buyLink,
  imageSize = 220,
  imageClassName = "",
  secondImageSrc,
  secondImageAlt,
}: ProductCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <div className="relative h-64 w-full bg-gray-800 flex items-center justify-center p-4 gap-1">
        {secondImageSrc ? (
          <>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={180}
              height={180}
              className="object-contain"
            />
            <Image
              src={secondImageSrc || "/placeholder.svg"}
              alt={secondImageAlt || imageAlt}
              width={165}
              height={165}
              className="object-contain"
            />
          </>
        ) : (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={imageSize}
            height={imageSize}
            className={`object-contain ${imageClassName}`}
          />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title.replace("FOYB", "FOYB™")}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        <p className="text-xl font-bold">{price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a href={buyLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-white text-black hover:bg-gray-200">Shop Now</Button>
        </a>
      </CardFooter>
    </Card>
  )
}
