import Vue from 'vue'
import { mount } from '@vue/test-utils'
import SkillSetTabs from '@/components/SkillSetTabs.vue'
import SkillSetTab from '@/components/SkillSetTab.vue'

// Wrap SkillSetTabs with real SkillSetTab children so $children is populated.
// shallowMount stubs children, preventing SkillSetTabs.mounted() from seeing them.
const createWrapper = () => {
  const Parent = Vue.extend({
    components: { SkillSetTabs, SkillSetTab },
    template: `
      <SkillSetTabs>
        <SkillSetTab src="kotlin_logo.svg" :selected="true">Kotlin</SkillSetTab>
        <SkillSetTab src="swift_logo.svg">Swift</SkillSetTab>
        <SkillSetTab src="scala_logo.svg">Scala</SkillSetTab>
        <SkillSetTab src="python_logo.svg">Python</SkillSetTab>
      </SkillSetTabs>
    `,
  })
  return mount(Parent)
}

describe('SkillSetTabs', () => {
  // Helpers to grab the SkillSetTabs component instance out of the parent wrapper
  const getTabs = (wrapper) => wrapper.findComponent(SkillSetTabs).vm

  it('renders a list item for each child tab', async () => {
    const wrapper = createWrapper()
    // mounted() sets this.tabs = this.$children, which triggers a v-for re-render.
    // $nextTick ensures the DOM has been updated before we query it.
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(4)
  })

  it('populates tabs array from $children in mounted()', async () => {
    const wrapper = createWrapper()
    await wrapper.vm.$nextTick()
    expect(getTabs(wrapper).tabs.length).toBe(4)
  })

  it('selectTab activates only the chosen tab', async () => {
    const wrapper = createWrapper()
    await wrapper.vm.$nextTick()
    const vm = getTabs(wrapper)
    vm.selectTab(vm.tabs[2])
    await wrapper.vm.$nextTick()
    expect(vm.tabs[2].$data.isActive).toBe(true)
    vm.tabs
      .filter((_, i) => i !== 2)
      .forEach((t) => expect(t.$data.isActive).toBe(false))
  })
})
