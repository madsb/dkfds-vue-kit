<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  FdsAlert,
  FdsButton,
  FdsCard,
  FdsCardGroup,
  FdsMenu,
  FdsMenuItem,
  FdsNavLink,
  FdsTilTop,
} from '@madsb/dkfds-vue-kit'
import { navigation } from '@madsb/dkfds-vue-kit'

const sections = [
  { id: 'forside', label: 'Forside' },
  { id: 'komponenter', label: 'Komponenter' },
  { id: 'anbefalinger', label: 'Anbefalinger' },
  { id: 'faellesskab', label: 'Fællesskab' },
]

const activeSection = ref('forside')

const navigateTo = (id: string) => {
  activeSection.value = id
  nextTick(() => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

const tips = [
  {
    id: 'tip-setup',
    title: 'Kom godt i gang',
    description:
      'Skab et hurtigt overblik over de vigtigste selvbetjeningsløsninger med korte, handlingsorienterede beskrivelser.',
  },
  {
    id: 'tip-layout',
    title: 'Hold styr på layout',
    description:
      'Planlæg sideopbygningen med tydelige spalter og luft, så indholdet er let at skimme på både mobil og desktop.',
  },
  {
    id: 'tip-a11y',
    title: 'Tænk tilgængelighed',
    description:
      'Understøt WAI-ARIA med klare overskrifter, alt-tekster og fokusmarkeringer, så alle kan benytte løsningen.',
  },
]

let navInstance: InstanceType<typeof navigation> | undefined

onMounted(() => {
  navInstance = new navigation()
  navInstance.init()
})

onBeforeUnmount(() => {
  navInstance?.teardown?.()
})
</script>

<template>
  <Story title="Layout/Full Page Example" icon="carbon:application">
    <Variant title="Mock page" icon="carbon:screen">
      <div class="demo-page">
        <header class="header">
          <div id="top"></div>
          <a class="skipnav" href="#main-content">Gå til sidens indhold</a>

          <div class="portal-info">
            <div class="portal-info-inner container">
              <a href="#forside" class="logo" @click.prevent="navigateTo('forside')">
                <span>Portalnavn</span>
              </a>

              <button
                class="function-link button-menu-open js-menu-open ml-auto d-print-none"
                type="button"
                aria-haspopup="dialog"
              >
                <svg class="icon-svg" focusable="false" aria-hidden="true">
                  <use href="#menu"></use>
                </svg>
                Menu
              </button>

              <div class="portal-user">
                <p class="user">
                  <span class="username weight-semibold">Eksempel Bruger</span>, Demoportalen
                </p>
                <button class="function-link d-print-none log-off" type="button">Log af</button>
              </div>
            </div>
          </div>

          <div class="solution-info">
            <div class="container solution-info-inner">
              <div class="solution-heading dv3-gra">
                <a href="#forside" @click.prevent="navigateTo('forside')">
                  Borgerportalen – selvbetjening
                </a>
              </div>

              <div class="additional-info">
                <p class="h5 authority-name mb-1">Digitaliseringsstyrelsen</p>
                <p class="mb-0">
                  Support: 12 34 56 78 ·
                  <a
                    href="#kontakt"
                    class="icon-link function-link"
                    @click.prevent="navigateTo('faellesskab')"
                  >
                    Kontakt
                    <svg class="icon-svg" aria-hidden="true" focusable="false">
                      <use href="#open-in-new"></use>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="navigation-menu contains-search">
            <div class="navigation-menu-inner container">
              <nav class="nav" aria-label="Hovednavigation">
                <ul class="mainmenu" role="menu">
                  <li
                    v-for="item in sections"
                    :key="item.id"
                    role="none"
                    :class="[{ active: activeSection === item.id }]"
                  >
                    <FdsNavLink role="menuitem" href="#" @click.prevent="navigateTo(item.id)">
                      {{ item.label }}
                    </FdsNavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="overlay"></div>
          <div class="mobile-drawer" role="dialog" aria-modal="true" aria-labelledby="menu-heading">
            <div class="menu-top">
              <h2 id="menu-heading" class="menu-heading">Menu</h2>
              <button class="function-link button-menu-close js-menu-close" type="button">
                <svg class="icon-svg" focusable="false" aria-hidden="true">
                  <use href="#close"></use>
                </svg>
                Luk
              </button>
            </div>

            <nav class="navigation-menu-mobile" aria-label="Mobil hovednavigation">
              <ul class="mainmenu">
                <li
                  v-for="item in sections"
                  :key="item.id"
                  :class="[{ current: activeSection === item.id }]"
                >
                  <a href="#" class="nav-link" @click.prevent="navigateTo(item.id)">
                    <span>{{ item.label }}</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="solution-info-mobile">
              <h3 class="sr-only">Myndighed</h3>
              <p class="mb-0"><strong class="authority-name">Digitaliseringsstyrelsen</strong></p>
              <p class="mb-0">Support: 12 34 56 78</p>
            </div>

            <div class="portal-info-mobile">
              <h3 class="sr-only">Bruger</h3>
              <p class="user">
                <span class="mb-2">Eksempel Bruger</span>
                <span>Demoportalen</span>
              </p>
              <button class="function-link d-print-none log-off" type="button">
                <svg class="icon-svg" focusable="false" aria-hidden="true">
                  <use href="#lock"></use>
                </svg>
                Log af
              </button>
            </div>
          </div>
        </header>

        <main id="main-content">
          <div class="container">
            <div class="row py-9">
              <div class="col-12 col-lg-3 mb-5 mb-lg-0">
                <h2 class="h5 mb-3">På denne side</h2>
                <FdsMenu variant="sidemenu" aria-label="Sektioner">
                  <FdsMenuItem
                    v-for="item in sections"
                    :key="item.id"
                    href="#"
                    :current="activeSection === item.id"
                    @click.prevent="navigateTo(item.id)"
                  >
                    {{ item.label }}
                  </FdsMenuItem>
                </FdsMenu>
              </div>

              <div class="col-12 col-lg-9">
                <section :id="sections[0].id" class="mb-5">
                  <h1>Tips og anbefalinger</h1>
                  <p class="font-lead">
                    Denne demoside samler centrale elementer fra en fiktiv offentlig portal med
                    fokus på overblik, navigation og tilgængelig kommunikation.
                  </p>
                  <FdsAlert variant="success" show-icon class="mt-4">
                    Siden vises som en statisk mock i Histoire. Brug navigationen for at udforske de
                    forskellige afsnit.
                  </FdsAlert>
                </section>

                <section :id="sections[1].id" class="mb-5">
                  <h2>Komponenter</h2>
                  <p class="mb-4">
                    Eksemplet illustrerer, hvordan kort, knapper og navigation kan kombineres for at
                    guide brugeren sikkert gennem en digital selvbetjening.
                  </p>
                  <FdsCardGroup type="deck">
                    <FdsCard v-for="tip in tips" :key="tip.id" :header="tip.title">
                      {{ tip.description }}
                      <template #actions>
                        <FdsButton variant="secondary">Læs mere</FdsButton>
                      </template>
                    </FdsCard>
                  </FdsCardGroup>
                </section>

                <section :id="sections[2].id" class="mb-5">
                  <h2>Anbefalinger</h2>
                  <p>
                    Kombinér indholdsblokke, notifikationer og handlingsknapper for at fremhæve de
                    vigtigste tilbud og sikre en tydelig brugerrejse.
                  </p>
                  <ul class="mt-3">
                    <li>Hold navigationen kort og sigende – brug sidemenuen til underpunkter.</li>
                    <li>Marker status med tydelige farver og kliksikre knapper.</li>
                    <li>
                      Genbrug grids og mellemrum fra designsystemet, så siden fremstår ensartet.
                    </li>
                  </ul>
                </section>

                <section :id="sections[3].id" class="mb-5" aria-labelledby="kontakt-heading">
                  <h2 id="kontakt-heading">Fællesskab &amp; kontakt</h2>
                  <p>
                    Brugerne kan kontakte supporten, finde hjælpedokumenter eller deltage i et
                    fællesskab, hvis de vil bidrage med forbedringer.
                  </p>
                  <div class="d-flex flex-wrap align-items-center mt-4">
                    <FdsButton class="mr-3 mb-3" variant="primary" icon="email"
                      >Skriv til os</FdsButton
                    >
                    <FdsButton class="mr-3 mb-3" variant="secondary" icon="download"
                      >Hent guides</FdsButton
                    >
                    <FdsButton class="mr-3 mb-3" variant="tertiary" icon="chat"
                      >Deltag i fællesskabet</FdsButton
                    >
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <FdsTilTop />
          <div class="footer">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-3 footer-col">
                  <section>
                    <h2 class="h5 mb-4">Ansvarlig myndighed</h2>
                    <ul class="unstyled-list">
                      <li>
                        <img
                          src="https://placehold.co/150x100/0059B3/FFFFFF"
                          alt="Logostyrelsen"
                          class="logo"
                        />
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-12 col-md-3 footer-col">
                  <section>
                    <h2 class="h5 mb-4">Kontakt</h2>
                    <ul class="nobullet-list mt-0">
                      <li>
                        <a class="function-link" href="mailto:support@myndighed.dk"
                          >support@myndighed.dk</a
                        >
                      </li>
                      <li>
                        <a class="function-link" href="tel:004512345678">(+45) 12 34 56 78</a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-12 col-md-3 footer-col">
                  <section>
                    <h2 class="h5 mb-4">Links</h2>
                    <ul class="nobullet-list mt-0">
                      <li><a class="function-link" href="#">Læs lidt om dit</a></li>
                      <li><a class="function-link" href="#">Her er også lidt om dat</a></li>
                      <li>
                        <a class="function-link icon-link" href="#">
                          Eller måske noget helt andet
                          <svg class="icon-svg" focusable="false" aria-hidden="true">
                            <use href="#open-in-new"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-12 col-md-3 footer-col">
                  <section>
                    <h2 class="h5 mb-4">Webtilgængelighed og cookies</h2>
                    <ul class="nobullet-list mt-0">
                      <li>
                        <a class="function-link icon-link" href="#">
                          Tilgængelighedserklæring
                          <svg class="icon-svg" focusable="false" aria-hidden="true">
                            <use href="#open-in-new"></use>
                          </svg>
                        </a>
                      </li>
                      <li><a class="function-link" href="#">Privatlivspolitik (cookies)</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Variant>
  </Story>
</template>
