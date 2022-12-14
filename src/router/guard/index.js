import { createLoadingGuard } from './loading'
import { createTitleGuard } from './title'
import { createPermissionGuard } from './permission'

export function setupGuardRouter(router) {
  createLoadingGuard(router)
  createTitleGuard(router)
  createPermissionGuard(router)
}
