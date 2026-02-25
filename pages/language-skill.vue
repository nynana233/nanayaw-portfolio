<template>
  <main class="bg-black-pearl min-h-screen pb-24">
    <div class="flex justify-between">
      <nuxt-link to="/">
        <img
          src="@/assets/svg/nanayaw_logo.svg"
          alt="Nana Yaw Logo"
          class="mt-10 ml-14"
        />
      </nuxt-link>

      <div class="flex mt-10 mr-14">
        <a
          href="https://dev.to/nynana233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="bg-black-pearl text-body-bold text-white px-6 py-4 btn-regular"
          >
            go to blog
          </button>
        </a>
        <a
          href="/pdf/nana-yaw-koranteng-resume.pdf"
          download="nana-yaw-koranteng-resume.pdf"
        >
          <button
            class="btn-outline bg-black-pearl border-white border-2 text-body-bold text-white px-6 py-2"
          >
            download my resume
          </button>
        </a>
      </div>
    </div>

    <div class="skills w-102 mx-auto mt-36 relative">
      <skill-set-tabs>
        <skill-set-tab src="kotlin_logo.svg" :selected="true">
          <h1 class="text-10xl leading-36 text-white">kotlin</h1>
          <p class="mt-10 ff-monaco text-white">
            <span class="text-peach">Kotlin</span> is my primary language for
            <span class="text-yellow">Android</span> development. I build
            production-grade apps with <span class="text-purple">MVVM</span>,
            Clean Architecture, and
            <span class="text-blue">Jetpack Compose</span>. Kotlin’s expressive
            type system, <span class="text-peach">coroutines</span>, and
            <span class="text-yellow">Flow</span> give me the power to write
            <span class="text-purple">safe</span>,
            <span class="text-blue">readable</span>, and
            <span class="text-peach">maintainable</span> code at every layer of
            the stack.
          </p>
        </skill-set-tab>
        <skill-set-tab src="swift_logo.svg">
          <h1 class="text-10xl leading-36 text-white">swift</h1>
          <p class="mt-10 ff-monaco text-white">
            With <span class="text-peach">Swift</span> I build native
            <span class="text-yellow">iOS</span> apps that feel at home on
            Apple’s platforms. Protocol-oriented design,
            <span class="text-purple">async/await</span>, and SwiftUI let me
            ship elegant, performant experiences — without ever reaching for a
            <span class="text-blue">cross-platform</span> workaround.
          </p>
          <!-- <h4 class="text-white ff-sora text-3xl mt-24">Projects</h4>
          <div class="relative">
            <div class="flex mt-8">
              <p class="ff-sora text-white mr-4">myCrd</p>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/mycrd/id1558675666"
              >
                <img :src="require('@/assets/svg/external_link.svg')" alt="" />
              </a>
            </div>
            <p
              class="ff-monaco text-white"
              @mouseover="paragraphHovered"
              @mouseleave="hoverRemoved"
            >
              Providing an easy and secure way to store, manage and exchange
              business cards.
            </p>
            <img
              ref="projectCover"
              class="absolute -bottom-1 invisible left-3/4"
              src="@/assets/png/myCrd-cover.png"
              alt=""
              srcset=""
            />
          </div> -->
        </skill-set-tab>
        <skill-set-tab src="scala_logo.svg">
          <h1 class="text-10xl leading-36 text-white">scala</h1>
          <p class="mt-10 ff-monaco text-white">
            <span class="text-peach">Scala</span> sits at the intersection of
            <span class="text-yellow">object-oriented</span> and
            <span class="text-purple">functional</span> programming. I use it
            for building robust <span class="text-blue">backend</span> systems
            and data pipelines, leveraging its strong static type system,
            <span class="text-peach">immutability</span>, and the
            <span class="text-yellow">Akka</span> ecosystem to write
            <span class="text-purple">concurrent</span>, fault-tolerant services
            that scale.
          </p>
        </skill-set-tab>
        <skill-set-tab src="python_logo.svg">
          <h1 class="text-10xl leading-36 text-white">python</h1>
          <p class="mt-10 ff-monaco text-white">
            <span class="text-yellow">Python</span> is my go-to for
            <span class="text-peach">scripting</span>, automation, and backend
            services. I build REST APIs with
            <span class="text-purple">FastAPI</span> and Django, process data
            with <span class="text-blue">pandas</span>, and deploy containerised
            microservices on cloud infrastructure — all in the language that
            <span class="text-yellow">reads</span> like
            <span class="text-peach">prose</span>.
          </p>
        </skill-set-tab>
      </skill-set-tabs>
      <social-media />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'intro',
})
</script>

<style lang="scss">
$t-duration: 800ms;
$t-delay: 300ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #2e2e2e;
  }

  &::after {
    top: 50%;
    background-color: #2e2e2e;
  }
}

.intro-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
