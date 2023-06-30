import * as React from "react"
import { WebView } from "react-native-webview"
import { StyleSheet } from "react-native"
import ReddiSteddiCore from "../../webPlugins/ReddiSteddiCore.raw.js"

export default function Webview() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://reddit.com" }}
      injectedJavaScript={`${ReddiSteddiCore}`}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
})