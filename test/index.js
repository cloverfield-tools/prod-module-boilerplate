'use strict';

import test from 'blue-tape';
import hello from '../source/index';


test('Tests run', (assert) => {
  assert.pass('Tests run');
  assert.end();
});


test('Greet World', (assert) => Promise.resolve(
  assert.equal(hello('World'), 'Hello, World!')
));
