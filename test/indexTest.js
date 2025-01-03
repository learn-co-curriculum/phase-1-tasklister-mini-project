const chai = require('chai');
global.expect = chai.expect;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const babel = require('@babel/core');

// Load HTML content
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

// Transform JavaScript using Babel
const { code: transformedScript } = babel.transformFileSync(
  path.resolve(__dirname, '..', 'src/index.js'),
  { presets: ['@babel/preset-env'] }
);

// Initialize JSDOM
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable"
});

// Inject the transformed JavaScript into the virtual DOM
const scriptElement = dom.window.document.createElement("script");
scriptElement.textContent = transformedScript;
dom.window.document.body.appendChild(scriptElement);

// Expose JSDOM globals to the testing environment
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
global.Node = dom.window.Node;
global.Text = dom.window.Text;
global.XMLHttpRequest = dom.window.XMLHttpRequest;

// Sample test suite for JavaScript event handling
describe('Handling form submission', () => {
  let form
  let formInput
  let taskList

  before(() => {
    form = document.querySelector('#create-task-form')
    formInput = document.querySelector('#new-task-description')
    taskList = document.querySelector('#tasks')
  })

  it('should add an event to the form and add input to webpage', () => {
    // Simulate user input
    formInput.value = 'Wash the dishes'
    const event = new dom.window.Event('submit')
    form.dispatchEvent(event)
    expect(taskList.textContent).to.include('Wash the dishes')
  })
})