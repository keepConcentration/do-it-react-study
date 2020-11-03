import { configure, setAddon } from '@storybook/react';
import interopRequireDerault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadStories() {
    const context = require.context('../src/stories', true, /Story\.jsx$/);
    context.keys().forEach((srcFile) => {
        interopRequireDerault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);