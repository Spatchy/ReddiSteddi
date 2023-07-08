var observer = new MutationObserver((mutations) => {
  const loginFrame = document.querySelector("iframe[src*='reddit.com/account/login']")
  const loginButton = loginFrame.contentDocument.querySelector("form[action='/login'] button[type='submit']")
  if (loginFrame.contentDocument.contains(loginButton)) {
    alert("login button detected")
    loginButton.addEventListener("click", () => {
      const accountUsername = loginFrame.contentDocument.querySelector("input#loginUsername").value
      window.ReactNativeWebView.postMessage("USER_LOGIN::" + accountUsername)
    })
    observer.disconnect()
    }
})

observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})