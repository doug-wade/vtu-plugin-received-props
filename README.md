# vtu-plugin-received-props

## Installation

First, install the plugin using your favorite package manager (npm, pnpm, yarn)

```shell
yarn add vtu-plugin-received-props --dev
```

Then add it to your `setup.js`

```javascript
import { config } from '@vue/test-utils'
import ReceivedPropsPlugin from './myPlugin'

// Install the plugin onto VueWrapper
config.plugins.VueWrapper.install(ReceivedPropsPlugin)
```

## Usage

This adds a new method to the wrapper returned by `mount` called `receivedProps`.

```typescript
it('passes correct props to underlying component', () => {
  const wrapper = mount(ParentComponent);

  const target = wrapper.findComponent(ChildComponent);

  // This is the equivalent of
  // expect(target.props('my-prop') || target.attributes('my-prop')).toBe('foo')
  expect(target.receivedProps('my-prop')).toBe('foo')
});
```

## API

### receivedProps

Takes a single argument, the name of the attribute or prop that would be passed to a child component.

Returns the value passed to that attribute or prop.
