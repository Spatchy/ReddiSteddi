import { CurrentlyLoadedPluginTracker } from "../../WebViewPluginInjector/CurrentlyLoadedPluginTracker"

export const InjectionFinishedLoadingHander = (msg: string) => {
  CurrentlyLoadedPluginTracker.trackLoadedPlugin(msg)
  console.log(msg)
}