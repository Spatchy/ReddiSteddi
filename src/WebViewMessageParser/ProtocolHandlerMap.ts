import { WebviewMessageProtocols } from "../../types/WebViewMessageProtocols"
import { InjectionFinishedLoadingHander } from "./ProtocolHandlers/InjectionFinishedLoadingHandler"
import { UserLoginHandler } from "./ProtocolHandlers/UserLoginHandler"

export const ProtocolHandlerMap: Record<WebviewMessageProtocols, Function> = {
  INJECTION_FINISHED_LOADING: InjectionFinishedLoadingHander,
  USER_LOGIN: UserLoginHandler
}