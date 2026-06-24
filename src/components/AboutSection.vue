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
          I'm a Junior Front-End Web Developer based in Jakarta. I graduated in Information Systems
          from Gunadarma University (GPA 3.93) and spent the last year building real, user-facing
          interfaces dashboards, internal tools, and responsive front-ends across an online
          course platform, a software house, and a national bank.
        </p>
        <p class="text-[1.08rem] leading-[1.7] text-ink-soft text-justify">
          My focus is the front-end: turning UI/UX designs into clean, responsive interfaces with
          Vue. I'm also comfortable reaching into the backend when a feature needs it,
          wiring up a FastAPI endpoint or a database query, and getting the result deployed on a
          real server. Right now I'm looking for remote or junior front-end developer roles where I
          can keep building things people actually use.
        </p>
      </div>
    </div>
  </section>
</template>
