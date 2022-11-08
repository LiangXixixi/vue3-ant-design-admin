import router from "./router"
import { useCache } from "@/hooks/useCache"
import { useNProgress } from "@/hooks/useNProgress"
import { usePermissionStore } from "@/store/modules/permissionStore"

const permissionStore = usePermissionStore()
const { wsCache } = useCache()
const { start, done } = useNProgress()
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  start()
  if( permissionStore.getToken ) {
    if( to.path === '/login' ) {
      next({ path: '/' })
    }
    next()
  }else {
    if( whiteList.includes(to.path) ) {
      next()
    }else {
      next({ path: '/login' })
    }
  }
})

router.afterEach((to) => {
  // useTitle(to?.meta?.title as string)
  done()
})
