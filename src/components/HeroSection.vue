<script setup>
import { profile, metrics } from "../data/content.js";
</script>

<template>
  <section
    id="top"
    class="hero-surface hero-grid relative overflow-hidden text-ondark"
  >
    <div
      class="relative mx-auto grid w-full max-w-270 grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-17.5 md:pt-19.5"
    >
      <!-- KIRI: teks (konten hero kamu yang sekarang masuk ke sini) -->
      <div>
        <p v-reveal class="eyebrow eyebrow--light mb-3.5">
          Junior Front-End web developer
          <span class="text-ondark-mut">·</span>Jakarta, ID
          <span class="text-ondark-mut">·</span>Open to remote
        </p>

        <h1 v-reveal class="hero-title mb-5.5 max-w-[16ch]">
          I build responsive and accessible web applications focusing on the front-end.
        </h1>

        <p
          v-reveal
          class="mb-7.5 max-w-[54ch] text-lg leading-[1.55] text-ondark-mut text-justify md:text-xl"
        >
          Junior developer with 1+ year shipping production tools. Most recently
          a monitoring dashboard for
          <strong class="text-ondark">128,000+ banking agents</strong> at Bank
          Syariah Indonesia.
        </p>

        <div v-reveal class="flex flex-wrap gap-3.5">
          <a class="btn btn--solid" href="#work">View work</a>
          <a
            class="btn btn--line"
            :href="profile.cv"
            target="_blank"
            rel="noopener"
            >Download resume <span aria-hidden="true">↗</span></a
          >
        </div>
      </div>

      <!-- KANAN: foto -->
      <div v-reveal class="order-first flex justify-center md:order-0 md:justify-end">
        <div class="relative grid place-items-center">
          <!-- glow brand di belakang -->
          <div
            class="pointer-events-none absolute aspect-square w-[320px] rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(79,57,230,0.55),transparent_65%)] blur-2xl md:w-110"
            aria-hidden="true"
          ></div>
          <!-- foto (diperbesar) -->
          <img
            src="/foto_daffa3.png"
            alt="Muhammad Daffa Fachreza"
            class="relative w-75 max-w-full md:w-104"
          />
        </div>
      </div>
    </div>
  </section>
</template>
