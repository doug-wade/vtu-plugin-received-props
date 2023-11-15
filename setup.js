import { config } from '@vue/test-utils';
import ReceivedPropsPlugin from '.';

// Install the plugin onto VueWrapper
config.plugins.VueWrapper.install(ReceivedPropsPlugin);
