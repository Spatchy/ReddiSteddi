import React, { useRef } from "react"
import { WebView } from "react-native-webview"
import { StyleSheet } from "react-native"
import ReddiSteddiCore from "../../webPlugins/ReddiSteddiCore.raw.js"
import CoreStyles from "../../webPlugins/CoreStyles.raw.css"

export default function Webview() {
  const mainWebView = useRef<WebView>(null);

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

  const onload = () : void => {
    if (process.env.REDDISTEDDI_DEBUG) injectJavaScript(debugging)
    toInject.forEach((script) => {
      injectJavaScript(script)
    })
  }

  return (
    <>
      <WebView
        ref={mainWebView}
        style={styles.container}
        source={{ uri: "https://reddit.com" }}
        onLoad={onload}
        onMessage={(m) => console.log(m)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
})