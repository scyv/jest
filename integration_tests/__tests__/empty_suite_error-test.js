/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

const path = require('path');
const runJest = require('../runJest');

const DIR = path.resolve(__dirname, '../empty_suite_error');

describe('JSON Reporter', () => {
  it('fails the test suite if it contains no tests', () => {
    const result = runJest(DIR, []);
    const stderr = result.stderr.toString();
    expect(stderr).toMatch('Runtime Error');
    expect(stderr).toMatch(
      'Error: Your test suite must contain at least one test.'
    );
  });
});
