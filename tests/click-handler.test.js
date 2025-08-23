const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('click handler', () => {
  let dom;

  beforeEach(() => {
    const filePath = path.resolve(__dirname, '../index.html');
    const html = fs.readFileSync(filePath, 'utf8');
    dom = new JSDOM(html, { runScripts: 'dangerously' });
  });

  test('updates color and status on first click', () => {
    const document = dom.window.document;
    const h1 = document.querySelector('h1');
    const status = document.querySelector('.status');

    h1.click();

    expect(h1.style.color).toBe('#e74c3c');
    expect(status.textContent).toBe('Status: 1 cliques de progresso! 🚀');
  });
});
