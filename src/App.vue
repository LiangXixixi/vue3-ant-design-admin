<script lang="tsx">
import { defineComponent } from "vue"

export default defineComponent({
  setup(){
    return () => (
      <div id="app">
        <router-view></router-view>
      </div>
    )
  }
})
</script>