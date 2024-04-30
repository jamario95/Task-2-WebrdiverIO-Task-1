const { expect, browser, $ } = require('@wdio/globals');

describe('My Login application', () => {
  it('should create pastebin post', async () => {
    await browser.url(`https://pastebin.com/`);

    await $('#postform-text').setValue('Hello from WebDriver');
    await $('#postform-name').setValue('helloweb');

    await $('#select2-postform-expiration-container').click()
    await $('.select2-results__option[id*="10M"]').click()


    await $('.form-btn-container button').click()

    await browser.pause(10000);

  });
});
