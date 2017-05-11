export default function bindMethod(classToBind) {
  /* eslint-disable no-param-reassign */
  Object.getOwnPropertyNames(classToBind.constructor.prototype)
    .filter(prop => typeof classToBind[prop] === 'function' && prop !== 'constructor')
    .forEach(method => {
      classToBind[method] = classToBind[method].bind(classToBind);
    });
}
