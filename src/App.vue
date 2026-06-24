<script setup>
import TheNav from "./components/TheNav.vue";
import HeroSection from "./components/HeroSection.vue";
import WorkSection from "./components/WorkSection.vue";
import AboutSection from "./components/AboutSection.vue";
import StackSection from "./components/StackSection.vue";
import ContactSection from "./components/ContactSection.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <a
    href="#work"
    class="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-100 focus:rounded-br-lg focus:bg-brand focus:px-4 focus:py-2.5 focus:font-mono focus:text-[13px] focus:text-white"
    >Skip to work</a
  >

  <TheNav />

  <main>
    <HeroSection />
    <AboutSection />
    <StackSection />
    <WorkSection />
    <ContactSection />
  </main>

  <TheFooter />
</template>
