'use strict';

var faker = require('faker');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var faker__default = /*#__PURE__*/_interopDefaultLegacy(faker);

const GenerateName = () => {
  return faker__default['default'].name.findName();
};

function Init() {
    const name = GenerateName();
    console.log(`name: ${name}`);
}

Init();
