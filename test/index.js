'use strict';

import test from 'blue-tape';
import hello from '../source/index';


test('Tests run', (assert) => Promise.resolve(
  assert.pass('Tests run')
));


test('Greet World', (assert) => Promise.resolve(
  assert.equal(hello('World'), 'Hello, World!')
));
