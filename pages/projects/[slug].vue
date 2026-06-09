<script setup lang="ts">
import { findProjectBySlug, projects } from '~/data/projects'

const route = useRoute()
const { locale, t } = useLocale()

const slug = computed(() => String(route.params.slug))
const project = computed(() => findProjectBySlug(slug.value))

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: t.value.projectDetail.notFound,
    fatal: true
  })
}

const currentProject = computed(() => project.value!)

useHead(() => ({
  title: `${currentProject.value.title} — ${t.value.projectDetail.headSuffix}`,
  meta: [
    {
      name: 'description',
      content: currentProject.value.summary[locale.value]
    }
  ]
}))

const gradientStyle = computed(() => {
  const [first, second, third = second] = currentProject.value.backgroundGradients

  return {
    '--case-gradient-1': first,
    '--case-gradient-2': second,
    '--case-gradient-3': third
  }
})

const metaGroups = computed(() => [
  {
    label: t.value.projectDetail.meta.project,
    items: currentProject.value.meta.project[locale.value]
  },
  {
    label: t.value.projectDetail.meta.technologies,
    items: currentProject.value.meta.technologies
  },
  {
    label: t.value.projectDetail.meta.contribution,
    items: currentProject.value.meta.contribution[locale.value]
  }
])

definePageMeta({
  validate: async (route) => projects.some((p) => p.slug === route.params.slug)
})
</script>

<template>
  <main class="page-shell page-shell--case" :style="gradientStyle">
    <LanguageSwitcher class="page-language-switcher" />

    <nav class="breadcrumb" :aria-label="t.projectDetail.navigationAria">
      <NuxtLink to="/">{{ t.projectDetail.backToProjects }}</NuxtLink>
    </nav>

    <header class="case-header">
      <p class="section-kicker">{{ t.projectDetail.headerKicker }}</p>
      <h1>{{ currentProject.title }}</h1>
      <p class="case-header__summary">{{ currentProject.summary[locale] }}</p>

      <div class="case-meta-grid" aria-label="Project metadata">
        <section v-for="group in metaGroups" :key="group.label" class="case-meta-group">
          <h2>{{ group.label }}</h2>
          <ul>
            <li v-for="item in group.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </section>
      </div>

      <ul class="tag-list" :aria-label="t.projectDetail.tagsAria">
        <li v-for="tag in currentProject.tags" :key="tag" class="tag">
          {{ tag }}
        </li>
      </ul>
    </header>

    <section class="content-section compact-section" aria-labelledby="overview-title">
      <div class="section-heading">
        <p class="section-kicker">{{ t.projectDetail.overviewKicker }}</p>
        <h2 id="overview-title">{{ t.projectDetail.overviewTitle }}</h2>
      </div>
      <div class="text-stack">
        <p v-for="line in currentProject.overview[locale]" :key="line">
          {{ line }}
        </p>
      </div>
    </section>

    <section class="content-section" aria-labelledby="breakdown-title">
      <div class="section-heading">
        <p class="section-kicker">{{ t.projectDetail.breakdownKicker }}</p>
        <h2 id="breakdown-title">{{ t.projectDetail.breakdownTitle }}</h2>
        <p>{{ t.projectDetail.breakdownDescription }}</p>
      </div>

      <div class="breakdown-list">
        <BreakdownBlock
          v-for="(block, index) in currentProject.breakdown"
          :key="block.title[locale]"
          :block="block"
          :index="index"
        />
      </div>
    </section>

    <section class="content-section two-column-section" aria-labelledby="technical-notes-title">
      <div class="section-heading">
        <p class="section-kicker">{{ t.projectDetail.technicalNotesKicker }}</p>
        <h2 id="technical-notes-title">{{ t.projectDetail.technicalNotesTitle }}</h2>
      </div>
      <ul class="note-list">
        <li v-for="note in currentProject.technicalNotes[locale]" :key="note">
          {{ note }}
        </li>
      </ul>
    </section>

    <section class="content-section two-column-section" aria-labelledby="result-title">
      <div class="section-heading">
        <p class="section-kicker">{{ t.projectDetail.resultKicker }}</p>
        <h2 id="result-title">{{ t.projectDetail.resultTitle }}</h2>
      </div>
      <ul class="note-list note-list--strong">
        <li v-for="item in currentProject.result[locale]" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
  </main>
</template>
<style scoped>
.page-shell--case::before {
  background-image:
      radial-gradient(circle at 14% 16%, color-mix(in srgb, var(--case-gradient-1) 42%, transparent) 0, color-mix(in srgb, var(--case-gradient-1) 20%, transparent) 13rem, transparent 28rem),
      radial-gradient(circle at 84% 18%, color-mix(in srgb, var(--case-gradient-2) 38%, transparent) 0, color-mix(in srgb, var(--case-gradient-2) 16%, transparent) 11rem, transparent 26rem),
      radial-gradient(circle at 70% 76%, color-mix(in srgb, var(--case-gradient-3) 36%, transparent) 0, color-mix(in srgb, var(--case-gradient-3) 15%, transparent) 12rem, transparent 28rem),
      linear-gradient(180deg, rgba(16, 17, 19, 0), rgba(16, 17, 19, 0.52));
  background-size: 135% 135%, 125% 125%, 140% 140%, 100% 100%;
}

.page-shell--case::after {
  background-image:
      radial-gradient(circle at 38% 34%, color-mix(in srgb, var(--case-gradient-2) 28%, transparent) 0, color-mix(in srgb, white 12%, transparent) 8rem, transparent 13rem),
      radial-gradient(circle at 56% 8%, color-mix(in srgb, var(--case-gradient-1) 24%, transparent) 0, transparent 18rem);
  background-size: 130% 130%, 120% 120%;
  /* filter, opacity и animation можно не трогать – они переопределят глобальные */
}
</style>
