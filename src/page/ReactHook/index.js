import { ThemeProviderFollowHook } from '../../StoreContexFollowHook/ThemeContext'
import FollowReatHook from '../../components/FollowReactHook'

function ReactHook() {
  return (
    <ThemeProviderFollowHook>
      <div className="p-10">
        <FollowReatHook />
      </div>
    </ThemeProviderFollowHook>
  )
}
export default ReactHook
