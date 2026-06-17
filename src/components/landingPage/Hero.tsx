import { ArrowRight, PenTool } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
     <section className="px-4 py-50">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <h1 className="text-foreground mb-6 -rotate-1 transform text-6xl font-bold md:text-7xl">
              Write Like You Mean It
            </h1>
            <p className="handwritten mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
              {
                "Experience the joy of pen and paper in a digital world. Paper Notes brings the tactile feel of handwriting to your screen with a clean, distraction-free interface."
              }
            </p>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="btn-paper handwritten px-8 py-4 text-xl">
              <Link href="/signup">
                Start Writing Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="handwritten text-lg">
              <Link href="/demo">See It In Action</Link>
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mx-auto max-w-4xl">
            <div className="bg-background text-foreground note-shadow transform rounded-lg border-2 border-accent p-8">
              <div className=" bg-transparent flex min-h-75 items-center justify-center rounded p-8"
               style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, rgba(71, 70, 70, 0.911) 27px, rgba(71, 70, 70, 0.911) 28px)",
              lineHeight: "28px",
            }}
          >
                <div className="text-center">
                  <PenTool className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                  <p className="handwritten text-2xl text-gray-600">
                    {"Your thoughts, beautifully organized"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero