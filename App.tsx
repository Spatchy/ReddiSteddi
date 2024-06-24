import { StatusBar } from "expo-status-bar"
import Webview from "./src/browser/components/Webview"

export default function App() : JSX.Element {
  return (
    <>
      <StatusBar style="auto" />
      <Webview></Webview>
    </>
  )
}
