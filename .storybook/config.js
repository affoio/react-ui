import React from 'react';
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from '@storybook/addon-knobs';
import { GlobalStyle } from '../dev/globalStyles';

const req = require.context("../stories", true, /.stories.jsx$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator((story) => <div><GlobalStyle />{story()}</div>)
  addDecorator(withKnobs)
  req.keys().forEach(req);
}

configure(loadStories, module);
