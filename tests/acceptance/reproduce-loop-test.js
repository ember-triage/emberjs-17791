import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | reproduce loop', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /about triggers endless router injection loop', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
  });
});
