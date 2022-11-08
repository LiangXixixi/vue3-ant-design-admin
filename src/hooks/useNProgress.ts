import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const useNProgress = () => {
  const start = () => {
    NProgress.start()
  }
  const done = () => {
    NProgress.done()
  }
  return {
    start,
    done
  }
}