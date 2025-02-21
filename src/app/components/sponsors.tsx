export function Sponsors() {
    const sponsors = [
      {
        name: "Sponsor 1",
        logo: "/placeholder.svg?height=60&width=200",
      },
      {
        name: "Sponsor 2",
        logo: "/placeholder.svg?height=60&width=200",
      },
      {
        name: "Sponsor 3",
        logo: "/placeholder.svg?height=60&width=200",
      },
      {
        name: "Sponsor 4",
        logo: "/placeholder.svg?height=60&width=200",
      },
    ]
  
    return (
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center justify-center p-4">
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="max-h-12 w-auto filter brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  