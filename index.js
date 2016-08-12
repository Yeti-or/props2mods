'use strict';

exports.reactify = function reactify(bemjson) {
  var props = {};
  if(bemjson.mods) {
    props = Object.assign(props, bemjson.mods);
    delete bemjson.mods;
  }

  return Object.assign(props, bemjson);
}

exports.bemifyMods = function bemifyMods(props, declaredMods) {
  var mods = {};
  Object.keys(props).forEach(function(prop) {
    if(declaredMods[prop]) mods[prop] = props[prop];
  });

  return mods;
}
