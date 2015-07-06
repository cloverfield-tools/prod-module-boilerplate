'use strict';

import test from 'blue-tape';
import hello from '../source/index';


test('Tests run', (assert) => {
  assert.pass('Tests run');
  assert.end();
});


test('Greet World', (assert) => new Promise((resolve) => {
  assert.equal(hello('World'), 'Hello, World!');

  resolve();
}));


test('Should support object spread', (assert) => new Promise((resolve) => {
  const options = {x: 1, y: 2, z: 3};
  const {x, ...opts} = options;

  assert.equal(x, 1);
  assert.deepEqual(opts, {y: 2, z: 3});

  resolve();
}));
