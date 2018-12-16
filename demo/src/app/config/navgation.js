// helpers; list, page, code
import { route, redirect, list, page, code } from '../../core/router/helpers'

// pages
import Home from '../views/pages/Home'

// examples
import ApiCore from '../../examples/api/ApiCore'
import ApiGroup from '../../examples/api/ApiGroup'
import ApiEndpoint from '../../examples/api/ApiEndpoint'
import ApiResource from '../../examples/extension/ApiResource'
import ApiGraphQL from '../../examples/extension/ApiGraphQL'

// features
import VuexResource from '../../examples/extension/VuexResource'
import Config from '../../examples/config/Config'

// helper

// routes
export default [
  route('/', Home),

  // pages
  list('setup', 'Setup', [
    code('config', 'Config', Config),
  ]),

  // basics
  list ('api', 'Core', [
    code('core', 'ApiCore', ApiCore),
    code('group', 'ApiGroup', ApiGroup),
  ]),

  // features
  list ('api', 'Services', [
    code('endpoint', 'ApiEndpoint', ApiEndpoint),
    code('resource', 'ApiResource', ApiResource),
  ]),

  list ('extension', 'Extension examples', [
    code('vuex-resource', 'VuexResource', VuexResource),
    code('graph-ql', 'ApiGraphQL', ApiGraphQL),
  ])
]
