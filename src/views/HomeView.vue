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
            >
              View New Releases
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#2F3136]">
    <div class="card">
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div
            class="border-1 surface-border border-round m-2 text-center py-5 px-3"
          >
            <div class="mb-3">
              <img
                :src="
                  'https://primefaces.org/cdn/primevue/images/product/' +
                  slotProps.data.image
                "
                :alt="slotProps.data.name"
                class="w-6 shadow-2"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ slotProps.data.name }}</h4>
              <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
              />
              <div class="mt-5">
                <Button icon="pi pi-search" rounded class="mr-2" />
                <Button
                  icon="pi pi-star-fill"
                  rounded
                  severity="success"
                  class="mr-2"
                />
                <Button icon="pi pi-cog" rounded severity="help" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>

    <div class="card">
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div
            class="border-1 surface-border border-round m-2 text-center py-5 px-3"
          >
            <div class="mb-3">
              <img
                :src="
                  'https://primefaces.org/cdn/primevue/images/product/' +
                  slotProps.data.image
                "
                :alt="slotProps.data.name"
                class="w-6 shadow-2"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ slotProps.data.name }}</h4>
              <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
              />
              <div class="mt-5">
                <Button icon="pi pi-search" rounded class="mr-2" />
                <Button
                  icon="pi pi-star-fill"
                  rounded
                  severity="success"
                  class="mr-2"
                />
                <Button icon="pi pi-cog" rounded severity="help" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
  <div class="bg-[#2F3136] py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-lg font-semibold leading-8 text-white">
          Media Database
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-[#6366F1] sm:text-4xl"
        >
          A better way to review
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white">
          Let us others know what you think about each main branch of media.
        </p>
      </div>

      <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div
          class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366F1] text-white sm:shrink-0"
            >
              <component
                :is="feature.icon"
                class="h-8 w-8"
                aria-hidden="true"
              />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-white">
                {{ feature.name }}
              </p>
              <p class="mt-2 text-base leading-7 text-white">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  BoltIcon,
  FilmIcon,
  TvIcon,
  BookOpenIcon,
} from "@heroicons/vue/24/outline";
import { ProductService } from "@/service/ProductService";

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};

const features = [
  {
    name: "Movies",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FilmIcon,
  },
  {
    name: "Television Shows",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: TvIcon,
  },
  {
    name: "Video Games",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: BoltIcon,
  },
  {
    name: "Books",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
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

onMounted(() => {
  ProductService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 9))
  );
});
</script>
