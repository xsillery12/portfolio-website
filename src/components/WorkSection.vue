<script setup>
import { projects } from "../data/content.js";
</script>

<template>
  <section id="work" class="py-16 md:py-22">
    <div class="mx-auto w-full max-w-270 px-6">
      <header v-reveal class="mb-10">
        <p class="eyebrow mb-3.5">Selected work</p>
        <h2 class="section-title">Things I&rsquo;ve built</h2>
      </header>

      <ul class="grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2">
        <li
          v-for="(p, i) in projects"
          :key="i"
          v-reveal
          class="card flex flex-col p-6.5"
          :class="p.feature ? 'md:col-span-2' : ''"
        >
          <img 
            v-if="p.image"
            :src="p.image"
            :alt="p.title"
            class="mb-5 -mx-6.5 -mt-6.5 block aspect-video w-[calc(100%+52px)] max-w-none object-cover"
            :class="p.feature ? 'aspect-21/9' : 'aspect-video'"
          />
          <div class="mb-3.5 flex items-center justify-between">
            <span class="card-tag">{{ p.tag }}</span>
            <span class="font-mono text-[13px] text-muted">{{ p.year }}</span>
          </div>

          <h3 class="card-title mb-2.5" :class="p.feature ? 'text-[clamp(1.4rem,3vw,1.9rem)]' : 'text-[1.3rem]'">
            {{ p.title }}
          </h3>

          <p class="mb-4.5 text-ink-soft text-justify" :class="p.feature ? 'text-[1.04rem]' : ''">
            {{ p.desc }}
          </p>

          <ul class="mb-4.5 flex list-none flex-wrap gap-2 p-0">
            <li v-for="c in p.chips" :key="c" class="chip">{{ c }}</li>
          </ul>

          <p v-if="p.note" class="mt-auto pt-1 font-mono text-[12.5px] text-muted">{{ p.note }}</p>
          <div v-else-if="p.link || p.link1 || p.link2 || p.weblink" class="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              v-if="p.link"
              :href="p.link"
              target="_blank"
              rel="noopener"
              class="mono-link mt-auto self-start"
              >Code <span aria-hidden="true">↗</span></a
            >
            <a
              v-if="p.link1"
              :href="p.link1"
              target="_blank"
              rel="noopener"
              class="mono-link mt-auto self-start"
              >Code 1 <span aria-hidden="true">↗</span></a
            >
            <a
              v-if="p.link2"
              :href="p.link2"
              target="_blank"
              rel="noopener"
              class="mono-link"
              >Code 2 <span aria-hidden="true">↗</span></a
            >
            <a
              v-if="p.weblink"
              :href="p.weblink"
              target="_blank"
              rel="noopener"
              class="mono-link"
              >Website <span aria-hidden="true">↗</span></a
            >
          </div>
          
        </li>
      </ul>
    </div>
  </section>
</template>
