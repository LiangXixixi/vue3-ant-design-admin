import { defineComponent } from 'vue'
import LoginForm from './loginForm'

export default defineComponent({
  setup(){
    return () => (
      <>
        <div>Login</div>
        <LoginForm />
      </>
    )
  }
})