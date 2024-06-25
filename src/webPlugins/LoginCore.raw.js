var observer = new MutationObserver((mutations) => {
  const loginButton = document.querySelector("body > shreddit-app > shreddit-overlay-display")
    .shadowRoot.querySelector("shreddit-signup-drawer")
    .shadowRoot.querySelector("shreddit-drawer > div > shreddit-async-loader > div > shreddit-slotter")
    .shadowRoot.querySelector("#login > auth-flow-modal > div.w-100 > faceplate-tracker > button")

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      const accountUsername = document.querySelector("#login-username").value
      window.ReactNativeWebView.postMessage("USER_LOGIN::" + accountUsername)
    })
    observer.disconnect()
  }
})

observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true })