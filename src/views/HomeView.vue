<template>
  <div class="relative overflow-hidden bg-[#2F3136]">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1
            class="font text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            New Releases
          </h1>
          <p class="mt-4 text-xl text-gray-300">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
        </div>
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div
              aria-hidden="true"
              class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div
                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
              >
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div
                      class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                    >
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              href="#"
              class="inline-block rounded-md border border-transparent bg-[#6366F1] py-3 px-8 text-center font-medium text-white hover:bg-white hover:text-[#6366F1] transition duration-200"
              >View New Releases</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#2F3136]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <!-- <h2 class="text-2xl font-bold text-white">Collections</h2> -->
        <p class="mt-2 text-5xl font-bold tracking-tight text-[#6366F1] sm:text-5xl mb-10">What to watch</p>
        <p class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Top Picks</p>
        <p class="mt-6 text-lg text-white">TV shows and Movies just for you.</p>
        <div
          class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="group relative"
          >
            <div
              class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h3 class="mt-6 text-sm text-white">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p class="text-base font-semibold text-white">
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <!-- <h2 class="text-2xl font-bold text-white">Collections</h2> -->
        <p class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Fan Favorites</p>
        <p class="mt-6 text-lg text-white">This week's top TV shows and Movies.</p>
        <div
          class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="group relative"
          >
            <div
              class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h3 class="mt-6 text-sm text-white">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p class="text-base font-semibold text-white">
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#2F3136] py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-lg font-semibold leading-8 text-white">Media Database</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-[#6366F1] sm:text-4xl">A better way to review</p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white">Let us others know what you think about each main branch of media.</p>
      </div>

      <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366F1] text-white sm:shrink-0">
              <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-white">{{ feature.name }}</p>
              <p class="mt-2 text-base leading-7 text-white">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BoltIcon, FilmIcon, TvIcon, BookOpenIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Movies',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FilmIcon,
  },
  {
    name: 'Television Shows',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: TvIcon,
  },
  {
    name: 'Video Games',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Books',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BookOpenIcon,
  },
];

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
</script>
