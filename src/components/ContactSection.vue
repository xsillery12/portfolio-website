<script setup>
import { profile } from "../data/content.js";
</script>

<template>
  <section id="contact" class="contact-surface relative overflow-hidden text-ondark">
    <div v-reveal class="relative mx-auto w-full max-w-270 px-6 py-24 text-center">
      <p class="eyebrow eyebrow--light mb-3.5 justify-center">Contact</p>
      <h2 class="contact-title mb-4.5">
        Open to remote &amp; junior<br />web developer roles.
      </h2>
      <p class="mx-auto mb-7.5 max-w-[44ch] text-[1.1rem] text-ondark-mut">
        The fastest way to reach me is email — I usually reply within a day.
      </p>

      <a class="btn btn--solid btn--big"
        :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`"
        target="_blank"
        rel="noopener"
      >{{ profile.email }}</a>

      <ul class="mt-8.5 flex list-none flex-wrap justify-center gap-7 p-0">
        <li>
          <a :href="profile.linkedin" target="_blank" rel="noopener" class="font-mono text-[14px] text-ondark-mut transition-colors hover:text-amber">LinkedIn ↗</a>
        </li>
        <li>
          <a :href="profile.github" target="_blank" rel="noopener" class="font-mono text-[14px] text-ondark-mut transition-colors hover:text-amber">GitHub ↗</a>
        </li>
        <li>
          <a :href="profile.cv" target="_blank" rel="noopener" class="font-mono text-[14px] text-ondark-mut transition-colors hover:text-amber">Resume ↗</a>
        </li>
      </ul>
    </div>
  </section>
</template>
