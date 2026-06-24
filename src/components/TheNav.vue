<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { profile } from "../data/content.js";

const stuck = ref(false);
const onScroll = () => (stuck.value = window.scrollY > 8);

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
</script>

<template>
  <header class="sticky top-0 z-40"
    :class="[
      'sticky top-0 z-40 transition-[background-color,border-color] duration-200',
      stuck ? 'nav-scrolled' : '',
    ]"
  >
    <div class="mx-auto flex h-16.5 w-full max-w-270 items-center justify-between gap-5 px-6">
      <a href="#top" class="flex items-center gap-2.75 font-semibold no-underline">
        <span class="brand-mark" aria-hidden="true">MDF</span>
        <span class="font-display text-base tracking-[0.01em] transition-colors" :class="stuck ? 'text-ink' : ''">{{ profile.name }}</span>
      </a>

      <nav class="hidden items-center gap-6 transition-colors md:flex" :class="stuck ? 'text-ink-soft' : ''" aria-label="Primary">
        <a v-for="l in links" :key="l.href" :href="l.href" class="nav-link text-[15px]">{{ l.label }}</a>
      </nav>

      <div class="flex items-center gap-3.5">
        <a
          class="btn btn--ghost hidden min-[420px]:inline-flex"
          :href="profile.cv"
          target="_blank"
          rel="noopener"
        >
          Resume <span aria-hidden="true">↗</span>
        </a>

        <a
          :href="profile.github"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="grid place-items-center transition-colors"
          :class="stuck ? 'text-ink-soft hover:text-brand' : ''"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.28 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
