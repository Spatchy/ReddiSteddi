import { WebviewMessage } from "../../types/WebViewMessage";
import { WebviewMessageProtocols } from "../../types/WebViewMessageProtocols";

export const WebViewMessageParser = (rawMessage: string): WebviewMessage => {
  const splitMessage = rawMessage.split("::")
  return {
    protocol: splitMessage[0] as WebviewMessageProtocols,
    message: splitMessage[1]
  }
}