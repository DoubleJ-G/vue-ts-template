import { mount } from '@vue/test-utils'
import ProjectInfo from './ProjectInfo.vue'

describe('ProjectInfo.vue', () => {
  it('h1 contains "Vue 3"', () => {
    const wrapper = mount(ProjectInfo)
    const h1 = wrapper.find('h1')

    expect(h1.text()).toContain('Vue 3')
  })
})
