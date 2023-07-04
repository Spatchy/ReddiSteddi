import React, { useEffect, useRef, useState } from "react"
import { WebView, WebViewMessageEvent, WebViewNavigation } from "react-native-webview"
import { StyleSheet, View } from "react-native"

import { handleNavigation } from "../urlHandler"

import ReddiSteddiCore from "../../webPlugins/ReddiSteddiCore.raw.js"
import CoreStyles from "../../webPlugins/CoreStyles.raw.css"
import LoadingAnimation from "../../LoadingSpinner/components/LoadingAnimation"

export default function Webview() {
  const mainWebView = useRef<WebView>(null);
  const [loadedPluginsCounter, setLoadedPluginsCounter] = useState<number>(0)
  const [isPluginLoadingComplete, setIsPluginLoadingComplete] = useState<boolean>(false)

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

  const toInject = [
    ReddiSteddiCore,
    CoreStyles
  ]

  const onLoad = () : void => {
    if (process.env.REDDISTEDDI_DEBUG) injectJavaScript(debugging)
    toInject.forEach((script) => {
      injectJavaScript(script)
    })
  }

  const onMessage = (event : WebViewMessageEvent) : void => {
    const msg = event.nativeEvent.data
    if (msg == "INJECTION_FINISHED_LOADING") {
      injecionFinishedLoadingHandler()
    } else {
      console.log(msg)
    }
  }

  const injecionFinishedLoadingHandler = () => {
    setLoadedPluginsCounter(loadedPluginsCounter + 1)
  }

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

  useEffect(() => {
    if (loadedPluginsCounter == toInject.length) {
      setIsPluginLoadingComplete(true)
    } else {
      setIsPluginLoadingComplete(false)
    }
  }, [loadedPluginsCounter])

  return (
    <>
      {
        isPluginLoadingComplete ? <></> : <LoadingAnimation />
      }

      <View style={styles.outer}>
        <WebView
          ref={mainWebView}
          style={styles.container}
          source={{ uri: "https://reddit.com" }}
          onMessage={onMessage}
          onLoad={onLoad}
          onNavigationStateChange={
            (event : WebViewNavigation) => {
              handleNavigation(
                mainWebView,
                event.url,
                () => {
                  setLoadedPluginsCounter(0)
                }
              )
            }
          }
        />
      </View>
    </>
  )
}

