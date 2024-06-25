import React, { useEffect, useRef, useState } from "react"
import { WebView, WebViewMessageEvent, WebViewNavigation } from "react-native-webview"
import { StyleSheet, View } from "react-native"

import { handleNavigation } from "../../UrlHandler/urlHandler"
import { handleLogin } from "../accountHandler"

import LoadingAnimation from "../../LoadingSpinner/components/LoadingAnimation"
import { WebViewMessageParser } from "../../WebViewMessageParser/WebviewMessageParser"
import { WebViewPlugin } from "../../../types/WebViewPlugin"
import { WebViewPluginInjector } from "../../WebViewPluginInjector/WebViewPluginInjector"
import { ProtocolHandlerMap } from "../../WebViewMessageParser/ProtocolHandlerMap"
import { WebviewMessageProtocols } from "../../../types/WebViewMessageProtocols"

export default function Webview() {
  const mainWebView = useRef<WebView>(null);
  const [numOfPlugins, setNumOfPlugins] = useState<number>(0)
  const [loadedPlugins, setLoadedPlugins] = useState<WebViewPlugin[]>([])
  const [isPluginLoadingComplete, setIsPluginLoadingComplete] = useState<boolean>(false)
  const [currentUrl, setCurrentUrl] = useState<string>("")
  const webViewPluginInjector = new WebViewPluginInjector(mainWebView)

  const debugging = `
  const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
  console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
    };
  `

  const injectJavaScript = (jsString : string) : void => {
    if (mainWebView.current) {
      mainWebView.current.injectJavaScript(jsString)
    }
  }

  const onLoad = () : void => {
    if (process.env.EXPO_PUBLIC_REDDISTEDDI_DEBUG) {
      injectJavaScript(debugging)
    }
    webViewPluginInjector.initInject(currentUrl, setNumOfPlugins, setLoadedPlugins)
  }

  const onMessage = (event : WebViewMessageEvent): void => {
    const msg = WebViewMessageParser(event.nativeEvent.data)
    const protocol = msg.protocol as WebviewMessageProtocols
    ProtocolHandlerMap[protocol]
  }

  useEffect(() => {
    setIsPluginLoadingComplete(loadedPlugins.length === numOfPlugins)
  }, [loadedPlugins])

  const styles = StyleSheet.create({
    container: {
      flex: isPluginLoadingComplete ? 1 : 0,
      backgroundColor: "#000",
    },
    outer: {
      flex: isPluginLoadingComplete ? 1 : 0,
      overflow: "hidden",
      height: isPluginLoadingComplete ? "100%" : 0,
    }
  })

  return (
    <>
      {/* {
        isPluginLoadingComplete ? <></> : <LoadingAnimation />
      } */}

      
      <View style={styles.outer}>
        <WebView
          ref={mainWebView}
          style={styles.container}
          source={{ uri: "https://reddit.com/login/" }}
          onMessage={onMessage}
          onLoad={onLoad}
          onNavigationStateChange={
            (event : WebViewNavigation) => {
              setCurrentUrl(event.url)
              handleNavigation(
                mainWebView,
                event.url,
                () => {
                  setLoadedPlugins([])
                }
              )
            }
          }
        />
      </View>
    </>
  )
}

