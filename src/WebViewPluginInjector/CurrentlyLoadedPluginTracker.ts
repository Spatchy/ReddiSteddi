export class CurrentlyLoadedPluginTracker {
  public static loadedPlugins:String[] = []
  public static registeredCallbacks: Function[] = []

  public static trackLoadedPlugin(plugin: String) {
    this.loadedPlugins.push(plugin)
    this.registeredCallbacks.forEach((f) => f(this.loadedPlugins))
  }

  public static clearLoadedPlugins() {
    this.loadedPlugins = []
  }

  public static registerCallback(callback: Function) {
    this.registeredCallbacks.push(callback)
  }
}