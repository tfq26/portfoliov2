<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const shell = ref<HTMLElement | null>(null);
let frame = 0;

const updatePointer = (event: PointerEvent) => {
  if (!shell.value) return;

  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    shell.value?.style.setProperty('--pointer-x', `${event.clientX}px`);
    shell.value?.style.setProperty('--pointer-y', `${event.clientY}px`);
  });
};

onMounted(() => {
  window.addEventListener('pointermove', updatePointer, { passive: true });
});

onUnmounted(() => {
  cancelAnimationFrame(frame);
  window.removeEventListener('pointermove', updatePointer);
});
</script>

<template>
  <main ref="shell" class="site-shell" aria-label="Minimal portfolio shell">
    <div class="grain" aria-hidden="true"></div>

    <header class="topbar" aria-label="Primary">
      <a class="mark" href="#top" aria-label="Home"></a>
      <nav class="nav-points" aria-label="Sections">
        <a href="#one" aria-label="Section one"></a>
        <a href="#two" aria-label="Section two"></a>
        <a href="#three" aria-label="Section three"></a>
      </nav>
    </header>

    <div class="index-rail" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <section id="top" class="hero-panel" aria-label="Opening">
      <div class="hero-field">
        <span class="axis axis-a"></span>
        <span class="axis axis-b"></span>
        <span class="quiet-block block-a"></span>
        <span class="quiet-block block-b"></span>
      </div>
    </section>

    <section id="one" class="empty-band band-light" aria-label="Portfolio section one">
      <div class="band-inner">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section id="two" class="empty-band band-dark" aria-label="Portfolio section two">
      <div class="pin-grid">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section id="three" class="closing-field" aria-label="Portfolio section three">
      <span></span>
    </section>
  </main>
</template>
