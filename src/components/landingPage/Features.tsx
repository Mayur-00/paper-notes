import { BookOpen, Cloud, PenTool, Search, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Notebook Feel',
    content:
      'Ruled lines, paper textures, and handwritten fonts make every note feel authentic and personal.',
  },
  {
    icon: Search,
    title: 'Smart Search',
    content:
      'Find any note instantly with powerful search that understands your handwritten-style content.',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    content:
      'Your thoughts are yours alone. End-to-end encryption keeps your notes completely private.',
  },
  {
    icon: Smartphone,
    title: 'Works Everywhere',
    content:
      'Write on any device. Your notes sync seamlessly across phone, tablet, and computer.',
  },
  {
    icon: Cloud,
    title: 'Auto-Save',
    content: 'Never lose a thought. Every keystroke is automatically saved as you write.',
  },
  {
    icon: PenTool,
    title: 'Distraction-Free',
    content:
      'Clean, minimal interface lets you focus on what matters most - your ideas.',
  },
]

const Features = () => {
  return (
    <section id='Features' className=" px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="handwritten mb-4 rotate-1 transform text-4xl font-bold md:text-5xl">
            Why Paper Notes?
          </h2>
          <p className="handwritten mx-auto max-w-2xl text-xl text-gray-600">
            {"We've reimagined note-taking to feel as natural as writing in your favorite notebook"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card shadow-lg -rotate-1 transform rounded-lg border-2 border-accent p-6 transition-transform hover:rotate-0"
              >
                <Icon className="mb-4 h-12 w-12 text-gray-700" />
                <h3 className="handwritten mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="handwritten text-gray-600">{feature.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features