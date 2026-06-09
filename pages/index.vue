<script setup lang="ts">
import { featuredProjects, homeBackgroundGradients } from '~/data/projects'

const projects = featuredProjects
const { t } = useLocale()

const homeGradientStyle = computed(() => {
  const [first, second, third, fourth = third] = homeBackgroundGradients

  return {
    '--home-gradient-1': first,
    '--home-gradient-2': second,
    '--home-gradient-3': third,
    '--home-gradient-4': fourth
  }
})

useHead(() => ({
  title: t.value.home.headTitle,
  meta: [
    {
      name: 'description',
      content: t.value.home.headDescription
    }
  ]
}))
</script>

<template>
  <main class="page-shell page-shell--home" :style="homeGradientStyle">
    <LanguageSwitcher class="page-language-switcher" />

    <section class="hero" aria-labelledby="home-title">
      <p class="section-kicker">{{ t.home.kicker }}</p>
      <h1 id="home-title">{{ t.home.role }}</h1>
      <div class="hero__contacts" aria-label="Name and contacts">
        <span>{{ t.home.name }}</span>
        <span>{{ t.home.contacts }}</span>
      </div>
      <p class="hero__summary">
        {{ t.home.summary }}
      </p>
      <ul class="hero__skills" aria-label="Technical Artist skills">
        <li v-for="skill in t.home.skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </section>

    <section class="content-section" aria-labelledby="projects-title">
      <div class="section-heading">
        <p class="section-kicker">{{ t.home.projectsKicker }}</p>
        <h2 id="projects-title">{{ t.home.projectsTitle }}</h2>
        <p>
          {{ t.home.projectsDescription }}
        </p>
      </div>

      <div class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </section>
  </main>
</template>
