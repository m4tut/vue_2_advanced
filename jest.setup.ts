import Vue from 'vue'

import dotenv from 'dotenv'
import '@testing-library/jest-dom'

// Vue config
Vue.config.productionTip = false

// Connects env
dotenv.config({ path: './.env' })

// Mocks global
