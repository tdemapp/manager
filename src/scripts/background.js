import { extension } from './util';

browser.browserAction.onClicked.addListener(() => {
  window.open(extension.getExtensionUrl('options/options.html'));
});
