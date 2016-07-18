'use strict';

exports.declareMods = function declareMods(config) {
  let mods = {};
  config.states.concat(Object.keys(config.mods)).forEach(mod => {
    mods[mod] = true;
  });

  return mods;
}

exports.reactify = function reactify(bemjson) {
  let props = {};
  if(bemjson.mods) {
    props = Object.assign(props, bemjson.mods);
    delete bemjson.mods;
  }

  return Object.assign(props, bemjson);
}

exports.bemifyMods = function bemifyMods(props, declaredMods) {
  let mods = {};
  Object.keys(props).forEach(prop => {
    if(declaredMods[prop]) mods[prop] = props[prop];
  });

  return mods;
}
