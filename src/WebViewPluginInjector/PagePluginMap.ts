import { WebViewPlugin } from "../../types/WebViewPlugin"
import LoginCore from "../webPlugins/LoginCore.raw.js"
import CoreStyles from "../webPlugins/CoreStyles.raw.css"

const loginCore: WebViewPlugin = {name: "loginCore", payload: LoginCore}
const coreStyles: WebViewPlugin = {name: "coreStyles", payload: CoreStyles}

export const pagePluginMap = {
  LOGIN: [
    loginCore,
    coreStyles
  ],
  FEED: [
    coreStyles
  ]
}