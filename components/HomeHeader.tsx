import { Container } from "./Container.tsx";
import { site } from "../utils/site.ts";
import { GitHub } from "./Github.tsx";

export function HomeHeader() {
  return (
    <header
      id="header"
      class="pb-3 bg-gradient-to-tl from-orange-500 to-sky-500 text-black"
    >
      <Container>
        <div class="flex flex-col items-center justify-between mt-10 w-full">
          <div class="flex flex-row gap-5 items-center ">
            <img
              src="/cool.jpeg"
              alt="avatar"
              width="500"
              height="500"
              class="w(24 md:32) h(24 md:32) rounded-full bg-white"
            />
            <h1 class="text-5xl lg:text-6xl font-bold">
              {site.title}
            </h1>
          </div>

          <h2 class="text-2xl mt-8">
            Sup. I'm Fitzypop. I write code, and blogs sometimes...
          </h2>
          <span class="flex flex-row items-center mt-4 gap-4">
            <a
              class="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fitzypop"
            >
              <GitHub class="h-7 w-7 text-black hover:text-gray-600" />
              {/* TODO Add linkdin and email icons */}
            </a>
          </span>
        </div>
      </Container>
    </header>
  );
}
