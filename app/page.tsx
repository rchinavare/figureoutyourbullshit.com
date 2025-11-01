import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 pb-20">
      {/* Hero Section */}
      <div className="w-full max-w-5xl mx-auto pt-20 pb-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">Figure Out Your Bullshit</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12">
          Because the leading cause of most of your problems is you
        </p>
      </div>

      {/* Products Section */}
      <section className="w-full max-w-6xl mx-auto pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ProductCard
            title="FOYB 15oz Lotus Bean Mug"
            description="Coffee fueled the Age of Enlightenment in the 17th century. Get your shit together, already."
            price="$14.00"
            imageSrc="/front-mug.png"
            imageAlt="Black glossy FOYB coffee mug front"
            secondImageSrc="/foyb-bean-mug-back-tm.png"
            secondImageAlt="Black glossy FOYB coffee mug back with zen bean"
            buyLink="https://figureoutyourbullshit.printful.me/product/black-glossy-mug"
          />

          <ProductCard
            title="FOYB Carl Jung 100% Cotton T-Shirt"
            description="Psychology's OG called — he says it's time to deal with your shit.
A tribute to the man who invented shadow work."
            price="From $27.00"
            imageSrc="/cj-tshirt.png"
            imageAlt="Black Carl Jung FOYB t-shirt"
            buyLink="https://figureoutyourbullshit.printful.me/product/carl-jung-foyb-100-cotton-t-shirt"
            imageSize={200}
          />

          <ProductCard
            title="FOYB Camo Trucker Hat"
            description="Trucker style, therapist energy. The FOYB Trucker Hat is built for long drives and short tempers."
            price="$22.50"
            imageSrc="/foyb-truckhat-camo.png"
            imageAlt="Camo trucker hat with green FOYB logo"
            buyLink="https://figureoutyourbullshit.printful.me/product/foyb-camo-trucker-hat"
          />

          <ProductCard
            title="FOYB 100% Organic Cotton Hoodie"
            description="Comfort for your body. Discomfort for your ego. Keep warm while facing cold realities."
            price="From $57.20"
            imageSrc="/foyb-hoodie-final.png"
            imageAlt="Black FOYB hoodie"
            buyLink="https://figureoutyourbullshit.printful.me/product/foyb-hoodie"
          />

          <ProductCard
            title="FOYB Teddy"
            description="Meet the FOYB Teddy. A plush companion for those difficult conversations with yourself."
            price="$29.00"
            imageSrc="/foyb-teddy-new.png"
            imageAlt="Tan teddy bear wearing FOYB t-shirt"
            buyLink="https://figureoutyourbullshit.printful.me/product/foyb-teddy"
          />

          <ProductCard
            title="FOYB Carl Jung 100% Soy Wax Candle"
            description="Smells like self-awareness. Burns clean — unlike your coping mechanisms."
            price="$15.00"
            imageSrc="/foyb-candle.png"
            imageAlt="FOYB Carl Jung soy wax candle with black lid"
            buyLink="https://figureoutyourbullshit.printful.me/"
            imageSize={260}
          />
        </div>

        <div className="text-center">
          <a href="https://figureoutyourbullshit.printful.me/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-black hover:bg-gray-200 text-xl font-bold px-8 py-6">
              View The Entire FOYB™ Shop
            </Button>
          </a>
        </div>
      </section>

      {/* Philosophy Snippet */}
      <section className="w-full max-w-3xl mx-auto pt-16 pb-16 border-t border-gray-800">
        <p className="text-2xl font-bold text-white mb-8 text-center">Stay Calm. You're Probably The Problem.</p>
        <blockquote className="text-xl italic text-gray-300 mb-6">
          "Until you make the unconscious conscious, it will direct your life and you will call it fate."
        </blockquote>
        <p className="text-right text-gray-400">— Carl Jung</p>
      </section>

      {/* Quick Start Guide */}
      <section className="w-full max-w-3xl mx-auto py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get Your Shit Together
          <br />
          <span className="text-2xl">A Brief Suggestive Guide:</span>
        </h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">1. Realize Why You Suck</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Take accountability for yourself, and your situation, regardless of how you got there. There is no growth
              without humility — no improvement without its pain. Stop letting your ego embarrass you.
            </p>
            <blockquote className="text-lg italic text-gray-400 border-l-4 border-gray-600 pl-4">
              "Real knowledge is to know the extent of one's ignorance." -Confucious
            </blockquote>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">2. Own It and Get Over It</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              It's not what happens to you that dictates who you are, but how you handle it. You can't control other
              people, but you can control your emotions. You're not a victim, you lack tools.
            </p>
            <blockquote className="text-lg italic text-gray-400 border-l-4 border-gray-600 pl-4">
              "He who angers you conquers you" -Elizabeth Kenny
            </blockquote>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">3. Shut Up and Get to Work</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Whatever your shortcoming, the solution should be intuitive and likely uncomfortable. Be diligent. Study
              how to improve. Practice it. Aspire to be the adult you needed as a child.
            </p>
            <blockquote className="text-lg italic text-gray-400 border-l-4 border-gray-600 pl-4">
              "When we are no longer able to change a situation, we are challenged to change ourselves." -Viktor E.
              Frankl
            </blockquote>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="w-full max-w-3xl mx-auto py-16 border-t border-gray-800">
        <h3 className="text-xl font-bold mb-6 text-center">DISCLAIMER</h3>
        <div className="text-sm text-gray-400 leading-relaxed space-y-4">
          <p>
            The content provided on figureoutyourbullshit.com is not psychological, medical, or professional advice. It
            is not a prescription for becoming a better person, nor a substitute for therapy or counseling.
          </p>
          <p>
            The purpose of this site is to inspire personal reflection and encourage individuals to approach their own
            challenges using logic and reasoning, principles of virtue, and a little humor. Readers are encouraged to
            think critically, question assumptions, and take responsibility for their own growth and decisions.
          </p>
          <p className="font-semibold">Use your judgment. Take what helps — and leave what doesn't.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl mx-auto py-16 border-t border-gray-800">
        <p className="text-center text-gray-300 leading-relaxed">
          For questions or comments, email us at{" "}
          <a href="mailto:info@figureoutyourbullshit.com" className="text-white hover:underline">
            info@figureoutyourbullshit.com
          </a>
        </p>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} All rights reserved. figureoutyourbullshit.com.
      </footer>
    </main>
  )
}
