export default k => str =>
  Array.from(str).reduce(
    ({ window, set }, val) => {
      window.push(val);
      if (window.length >= k) {
        set.add(window.join(''));
        window.shift();
      }
      return { window, set };
    },
    {
      window: [],
      set: new Set(),
    }
  ).set;
