<template>
  <div
    class="bg-[#17181A] z-50 border-t dark:border-channel-dark-menu-border dark:bg-channel-dark-menu-bg py-3 transform transition-all duration-500 ease-in-out absolute h-96 w-full bg-voxo-accent-bg"
    :class="openPanel ? '-translate-y-1' : '-translate-y-96'"
  >
    <div class="flex justify-end px-4">
      <XMarkIcon
        @click="openPanel = !openPanel"
        class="h-6 w-6 text-white cursor-pointer"
        aria-hidden="true"
      />
    </div>
    <div class="mx-auto px-8 pl-64" :class="openPanel ? '' : 'hidden'">
      <div class="grid grid-cols-1 gap-y-10 gap-x-8">
        <div class="grid grid-cols-3 gap-y-10 text-sm">
          <div v-for="section in categories[0].sections" :key="section.name">
            <div  class="flex items-center space-x-2">
            <component
                  :is="section.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
            <p
              :id="`${section.name}-heading`"
              class="font-medium text-xl text-white"
            >
              {{ section.name }}
            </p>
            </div>
            <ul
              role="list"
              :aria-labelledby="`${section.name}-heading`"
              class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
            >
              <li v-for="item in section.items" :key="item.name" class="flex">
                <a :href="item.href" class="hover:text-white text-gray-300 transition duration-200">{{
                  item.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- v-slot="{ open }"-->
  <Disclosure as="nav" class="bg-[#17181A]">
    <div class="mx-auto px-4">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block cursor-pointer">
            <div class="flex space-x-4">
              <div
                @click="navigate"
                class="flex space-x-4 items-center text-white hover:bg-[#2F3136] hover:text-white transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                  <div
                    class="flex items-center p-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
                  >
                    <span class="sr-only">View notifications</span>
                    <RectangleStackIcon class="h-5 w-5" aria-hidden="true" />
                  </div>
                  Menu
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="xl:w-96">
            <div
              class="input-group relative flex flex-wrap items-stretch w-full"
            >
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                placeholder="Search MovieDB"
              />
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="rounded-full bg-[#2F3136] p-1 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigations"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  XMarkIcon,
  RectangleStackIcon,
  FilmIcon,
  TvIcon,
  StarIcon
} from "@heroicons/vue/24/outline";

const openPanel = ref(false);

const categories = ref([
  {
    id: "men",
    name: "Men",
    featured: [
      {
        name: "New Arrivals",
        href: "#",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
        imageAlt:
          "Drawstring top with elastic loop closure and textured interior padding.",
      },
      {
        name: "Artwork Tees",
        href: "#",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
        imageAlt:
          "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
      },
    ],
    sections: [
      {
        id: "clothing",
        name: "Movies",
        icon: FilmIcon,
        items: [
          { name: "Tops", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Sweaters", href: "#" },
          { name: "T-Shirts", href: "#" },
          { name: "Jackets", href: "#" },
          { name: "Activewear", href: "#" },
          { name: "Browse All", href: "#" },
        ],
      },
      {
        id: "accessories",
        name: "Television",
        icon: TvIcon,
        items: [
          { name: "Watches", href: "#" },
          { name: "Wallets", href: "#" },
          { name: "Bags", href: "#" },
          { name: "Sunglasses", href: "#" },
          { name: "Hats", href: "#" },
          { name: "Belts", href: "#" },
        ],
      },
      {
        id: "brands",
        name: "Events",
        icon: StarIcon,
        items: [
          { name: "Re-Arranged", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Full Nelson", href: "#" },
          { name: "My Way", href: "#" },
        ],
      },
    ],
  },
]);

const open = ref(false);

const navigations = ref([
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
]);

const navigate = () => {
  // this will drop down a menu for the user to choose from
  openPanel.value = !openPanel.value;
};
</script>
