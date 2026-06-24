<script setup>
import { stackGroups, experience } from "../data/content.js";
</script>

<template>
  <section id="stack" class="py-16 md:py-22">
    <div class="mx-auto w-full max-w-270 px-6">
      <header v-reveal class="mb-10">
        <p class="eyebrow mb-3.5">Stack</p>
        <h2 class="section-title">What I work with</h2>
      </header>

      <div v-reveal class="grid grid-cols-1 gap-x-12 gap-y-7.5 md:grid-cols-2">
        <div v-for="g in stackGroups" :key="g.label">
          <p class="mb-3.5 font-mono text-[13px] tracking-[0.04em] text-muted">{{ g.label }}</p>
          <ul class="flex list-none flex-wrap gap-2 p-0">
            <li v-for="item in g.items" :key="item" class="chip">{{ item }}</li>
          </ul>
        </div>
      </div>

      <header v-reveal class="mb-6.5 mt-17.5">
        <p class="eyebrow">Experience</p>
      </header>

      <ol class="m-0 list-none p-0">
        <li
          v-for="(e, i) in experience"
          :key="i"
          v-reveal
          class="grid grid-cols-1 gap-2 border-t border-hairline py-5.5 last:border-b last:border-hairline md:grid-cols-[200px_1fr] md:gap-6"
        >
          <span class="font-mono text-[13px] text-muted md:pt-0.75">{{ e.date }}</span>
          <div>
            <h3 class="tl-role mb-1.5">{{ e.role }} <span>· {{ e.org }}</span></h3>
            <p class="m-0 text-ink-soft text-justify">{{ e.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
