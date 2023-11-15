import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import IPassThreeProps from './tst/IPassThreeProps.vue';
import ITakeOneProp from './tst/ITakeOneProp.vue';
import IDealNeitherInPropsNorAttributes from './tst/IDealNeitherInPropsNorAttributes.vue';
import NoPropsNorAttributes from './tst/NoPropsNorAttributes.vue';

describe('vtu-plugin-received-props', () => {
    it('add receivedProps to the wrapper', () => {
        const wrapper = mount(IPassThreeProps);

        const target = wrapper.findComponent(ITakeOneProp);

        expect(target.receivedProps('two')).toBe('bar');
    });

    it('handles no attributes or props', () => {
        const wrapper = mount(IDealNeitherInPropsNorAttributes);

        const target = wrapper.findComponent(NoPropsNorAttributes);

        expect(target.receivedProps('example')).toBe(undefined);
    });

    it('retrieves prop values', () => {
        const wrapper = mount(IPassThreeProps);

        const target = wrapper.findComponent(ITakeOneProp);

        expect(target.props('one')).toBe('foo');
        expect(target.receivedProps('one')).toBe('foo');
    });

    it('retrieves attribute values', () => {
        const wrapper = mount(IPassThreeProps);

        const target = wrapper.findComponent(ITakeOneProp);

        expect(target.attributes('three')).toBe('baz');
        expect(target.receivedProps('three')).toBe('baz');
    });
});