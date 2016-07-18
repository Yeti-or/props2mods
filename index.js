'use strict';

exports.reactify = function reactify(config) {
  let mods = {};
  config.states.concat(Object.keys(config.mods)).forEach(mod => {
    mods[mod] = true;
  });
  return mods;
}

exports.bemify = function bemify(props, declaredMods) {
  let mods = {};
  Object.keys(props).forEach(prop => {
    if(declaredMods[prop]) mods[prop] = props[prop];
  });
  return mods;
}
