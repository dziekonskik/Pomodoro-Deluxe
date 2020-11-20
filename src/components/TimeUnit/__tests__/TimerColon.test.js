import React from 'react';
import TimerColon from '../TimerColon/TimerColon';
import renderer from 'react-test-renderer';

let TimerColonRenderer;
beforeEach(() => (TimerColonRenderer = renderer.create(<TimerColon />)));

it('renders properly', () => {
  expect(TimerColonRenderer.toJSON()).toMatchSnapshot();
});

it('have exactly 2 children', () => {
  expect(TimerColonRenderer.toJSON().children.length).toBe(2);
});

it('has images as children', () => {
  expect(TimerColonRenderer.toJSON().children[0].type).toMatch('img');
  expect(TimerColonRenderer.toJSON().children[1].type).toMatch('img');
});
