export default (wrapper) => {
    const propishs = { ...wrapper.vm.$attrs, ...wrapper.vm.$props };

    return {
      receivedProps(propName) { return propishs[propName]; }
    };
}