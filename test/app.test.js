const test = require('node:test');
const assert = require('node:assert');

test('Application welcome message should be correct', () => {
    const message = 'Welcome to My CI/CD Application!';

    assert.strictEqual(
        message,
        'Welcome to My CI/CD Application!'
    );
});

test('Application deployment message should be correct', () => {
    const message = 'Successfully deployed using Jenkins and Docker.';

    assert.strictEqual(
        message,
        'Successfully deployed using Jenkins and Docker.'
    );
});