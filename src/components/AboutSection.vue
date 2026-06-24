<script setup></script>

<template>
  <section id="about" class="border-y border-hairline bg-surface py-16 md:py-22">
    <div class="mx-auto grid w-full max-w-270 grid-cols-1 items-start gap-12 px-6 md:grid-cols-[0.85fr_1.15fr]">
      <header v-reveal>
        <p class="eyebrow mb-3.5">About</p>
        <h2 class="section-title">Hi, I'm Daffa.</h2>
      </header>

      <div v-reveal>
        <p class="mb-4.5 text-[1.08rem] leading-[1.7] text-ink-soft text-justify">
          I'm a full-stack developer based in Jakarta. I graduated in Information Systems from
          Gunadarma University (GPA 3.93) and spent the last year shipping real tools — internal
          dashboards, test suites, and front-end builds — across an online course platform, a
          software house, and a national bank.
        </p>
        <p class="text-[1.08rem] leading-[1.7] text-ink-soft text-justify">
          I like the whole stack: designing an interface in Figma, wiring up a FastAPI backend, and
          getting it deployed and running on a real server. Right now I'm looking for remote or
          junior web developer roles where I can keep building things people actually use.
        </p>
      </div>
    </div>
  </section>
</template>
