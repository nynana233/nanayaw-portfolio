import { shallowMount } from '@vue/test-utils'
import SkillSetTab from '@/components/SkillSetTab.vue'

describe('SkillSetTab', () => {
  const factory = (propsData = {}) =>
    shallowMount(SkillSetTab, {
      propsData: { src: 'kotlin_logo.svg', ...propsData },
      slots: { default: '<p>Tab content</p>' },
    })

  it('renders slot content', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain('Tab content')
  })

  it('is hidden by default (isActive = false)', () => {
    const wrapper = factory()
    // v-show sets display:none when the condition is false
    expect(wrapper.attributes('style')).toContain('display: none')
  })

  it('is visible when isActive is set to true', async () => {
    const wrapper = factory()
    wrapper.vm.isActive = true
    await wrapper.vm.$nextTick()
    // v-show removes the inline style when true
    expect(wrapper.attributes('style')).toBeFalsy()
  })

  it('accepts a src prop', () => {
    const wrapper = factory({ src: 'swift_logo.svg' })
    expect(wrapper.vm.src).toBe('swift_logo.svg')
  })

  it('activates itself when selected prop is true', async () => {
    const wrapper = factory({ selected: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.attributes('style')).toBeFalsy()
  })
})
