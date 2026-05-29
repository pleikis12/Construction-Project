<template>
  <div class="stats-container">
    <div class="stat-grid">
      <div
        class="stat-card"
        v-for="stat in formattedStats"
        :key="stat.id"
      >
        <div class="stat-number">
          {{ stat.formattedValue }}
        </div>
        <div class="stat-label">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Stat {
  id: number
  label: string
  value: number | string
  suffix: string
}

const stats = ref<Stat[]>([
  { id: 1, label: 'YEARS ACTIVE', value: 3, suffix: '' },
  { id: 2, label: 'PROJECTS BUILT', value: 12, suffix: '+' },
  { id: 3, label: 'CITIES', value: 2, suffix: '' },
  { id: 4, label: 'CONSTRUCTED', value: '2.8', suffix: 'M €' }
])

const formattedStats = computed(() =>
  stats.value.map(stat => ({
    ...stat,
    formattedValue: stat.value + stat.suffix
  }))
)

onMounted(async () => {
  try {
    const res = await fetch('/api/projects/count')
    const data = await res.json()

    const target = stats.value.find(s => s.label === 'PROJECTS BUILT')
    if (target) target.value = data.count || 12
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
/* GRID WRAPPER (inherits hero container naturally) */
.stats-container {
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  width: 100%;

  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.25);

  box-sizing: border-box;
}

/* PANEL */
.stat-card {
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  padding: 1.2rem 1.5rem;

  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;

  background: rgba(20, 20, 20, 0.35);

  border-right: 1px solid rgba(255, 255, 255, 0.06);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    inset 0 -1px 0 rgba(0, 0, 0, 0.6);

  transition: transform 0.2s ease;
}

.stat-card:last-child {
  border-right: none;
}

.stat-card:hover {
  transform: translateY(-2px);
}

/* VALUE */
.stat-number {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1;

  color: #38cdf5;
  letter-spacing: -0.02em;
}

/* LABEL */
.stat-label {
  margin-top: 0.4rem;

  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  color: rgba(212, 197, 176, 0.75);
}

/* PHONE */
@media (max-width: 768px) {
  .stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat-card {
    padding: 0.9rem 1rem;
  }

  .stat-number {
    font-size: 1.4rem;
  }

  .stat-label {
    font-size: 0.55rem;
  }
}

/* Tiny Phones*/
@media (max-width: 380px) {
  .stat-grid {
    grid-template-columns: 1fr;
  }
  .stat-card {
    padding: 0.9rem 1rem;
  }

  .stat-number {
    font-size: 1rem;
  }

  .stat-label {
    font-size: 0.45rem;
  }
}
</style>