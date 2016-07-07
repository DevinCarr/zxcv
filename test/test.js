'use strict';
const index = require('../index.js');

if (index() === 'Hello!') {
    console.log('Passed!');
    process.exit(0);
} else {
    console.log('Failed!!');
    process.exit(1);
}
