import { WebviewMessageProtocols } from "./WebViewMessageProtocols"

export type WebviewMessage = {
  protocol: WebviewMessageProtocols,
  message: string
}