import WebView from "react-native-webview";
import { pagePluginMap } from "./PagePluginMap";
import { Dispatch, RefObject, SetStateAction } from "react";
import { urlPageMapper } from "../UrlHandler/urlPageMapper";
import { WebViewPlugin } from "../../types/WebViewPlugin";
import { CurrentlyLoadedPluginTracker } from "./CurrentlyLoadedPluginTracker";

export class WebViewPluginInjector {
  private webview: RefObject<WebView>
  private pagePluginMap = pagePluginMap

  constructor(webview: RefObject<WebView>) {
    this.webview = webview
  }

  public async initInject(url: string, NumPluginsCallback: Function, loadedPluginsCallback: Function){
    const pluginsToInject = this.getPluginsToInject(url)
    NumPluginsCallback(pluginsToInject.length)
    pluginsToInject.forEach(this.injectPlugin)
    CurrentlyLoadedPluginTracker.registerCallback(loadedPluginsCallback)
  }

  private getPluginsToInject(url: string) {
    const page = urlPageMapper(url)
    if (page) {
      const pluginsToInject = this.pagePluginMap[page]
      return pluginsToInject
    }
    return []
  }

  private async injectPlugin(plugin: WebViewPlugin) {
    if (this.webview.current) {
      this.webview.current.injectJavaScript(plugin.payload)
    }
  }
}