import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const movies = [
  {
    title: "🎬 High Potential",
    description: "Mystery & intelligence vibe 🔍✨",
    image: "/potential.webp",
    color: "from-sky-400 via-blue-500 to-indigo-500",
  },
  {
    title: "🚗 The Transporter",
    description: "Action fast & furious energy ⚡",
    image: "/transporter.webp",
    color: "from-red-400 via-orange-500 to-yellow-400",
  },
  {
    title: "👑 The Princess Diaries",
    description: "Royal teen glow up story 💅✨",
    image: "/princes.webp",
    color: "from-pink-300 via-rose-400 to-fuchsia-500",
  },
  {
    title: "💄 The Devil Wears Prada 2",
    description: "Fashion world elite aesthetic 👠🔥",
    image: "/prada.webp",
    color: "from-purple-400 via-pink-500 to-red-400",
  },
  {
    title: "🌸 Wild Child",
    description: "Teen rebel & transformation story 🌷",
    image: "/child.webp",
    color: "from-emerald-300 via-green-400 to-teal-500",
  },
  {
    title: "👑 The Crown",
    description: "Royal history & drama elegance 🏰",
    image: "/thecrown.webp",
    color: "from-indigo-300 via-sky-400 to-blue-600",
  },
];

export default function MoviesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="movies"
      className="relative py-24 overflow-hidden bg-white dark:bg-[#020617]"
    >
      {/* LAYER BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute w-[900px] h-[900px] bg-sky-300/20 blur-[220px] top-[-300px] left-[-300px]" />
        <div className="absolute w-[800px] h-[800px] bg-pink-400/20 blur-[200px] bottom-[-300px] right-[-300px]" />
        <div className="absolute w-[600px] h-[600px] bg-indigo-300/15 blur-[180px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      </div>

      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">
          🎬 Favorite Movies
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Film yang aku suka banget ✨
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-6xl mx-auto px-4">

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">

            {movies.map((movie, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
              >
                <div className="
                  group p-4 rounded-2xl
                  bg-white/80 dark:bg-white/5
                  backdrop-blur-xl
                  border border-white/20 dark:border-white/10
                  hover:-translate-y-2 transition duration-500
                ">

                  {/* LAYER GLOW PER CARD */}
                  <div className="relative">

                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${movie.color} blur-2xl opacity-40 group-hover:opacity-80 transition`}
                    />

                    <div
                      className={`relative rounded-xl p-[2px] bg-gradient-to-r ${movie.color}`}
                    >
                      <div className="overflow-hidden rounded-xl aspect-[2/3] bg-black">

                        <img
                          src={movie.image}
                          className="
                            w-full h-full object-cover
                            group-hover:scale-110
                            transition duration-500
                          "
                        />

                      </div>
                    </div>

                  </div>

                  {/* TEXT */}
                  <h3 className="mt-4 font-bold text-lg text-gray-900 dark:text-white">
                    {movie.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    {movie.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* BUTTONS */}
        <Button
          onClick={scrollPrev}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            bg-white/90 dark:bg-white/10
            backdrop-blur-md
          "
        >
          <ChevronLeft />
        </Button>

        <Button
          onClick={scrollNext}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-white/90 dark:bg-white/10
            backdrop-blur-md
          "
        >
          <ChevronRight />
        </Button>

      </div>
    </section>
  );
}