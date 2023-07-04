import 'react-native-url-polyfill/auto'
import { Linking } from "react-native"
import WebView from 'react-native-webview'
import { RefObject } from 'react'

const hostnameAllowPatterns = [
  /reddit.com$/
]

const handleNavigation = (webview : RefObject<WebView>, target : string, callback : Function) => {
  const url = new URL(target)
  console.log(url.href)

  if (hostnameAllowPatterns.some((re) => re.test(url.hostname))) {
    callback()
  } else {
    if(webview.current)
    webview.current.stopLoading()
    Linking.openURL(url.href)
  }

}

export { handleNavigation }