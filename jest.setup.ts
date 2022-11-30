import Vue from 'vue'

import dotenv from 'dotenv'
import { config } from '@vue/test-utils';
import '@testing-library/jest-dom'

// Vue config
Vue.config.productionTip = false

// Mock Vue components
config.stubs['router-link'] = { template: '<a><slot /></a>' };

// Connects env
dotenv.config({ path: './.env' })

// Mocks global
