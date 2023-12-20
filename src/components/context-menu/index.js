import { createContextMenu, destroyContextMenu } from './createContextMenu'

export function useContextMenu() {
  if (getCurrentInstance()) {
    onUnmounted(() => {
      destroyContextMenu()
    })
  }
  return [createContextMenu, destroyContextMenu]
}
