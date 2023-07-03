# ReddiSteddi
The API-less browser for Reddit!

![logo](https://github.com/Spatchy/ReddiSteddi/assets/17989046/4d811440-d953-4316-96ea-6fa0b753d14d)

## What is ReddiSteddi?
From July 2023, Reddit began charging for use of their API, forcing long-lived third party apps and clients to shut down or face unsustainable usage fees. ReddiSteddi aims to be a successor to these apps and reintroduce the features and experiences they enabled, all without a single request to Reddit's API.

## Goals
- Provide a better user experience than the official Reddit app or mobile site
- Provide access to **all** of Reddit's features, even those not accessable through the API (such as NSFW content)
- Reintroduce the accessability features present in other popular third party apps that are now no longer available
- Block ads and trackers
- Show Reddit we won't give up!

## How does it work?
ReddiSteddi does **not** use crawlers, scrapers or the public API, instead ReddiSteddi is essentially a very specialised web browser! Using the native webview technologies of Android and iOS, ReddiSteddi loads the Reddit website in full and then injects it's own custom scripts and styles to enhance the experience. Think of the browser extensions you use on a desktop browser and how they modify the page - just like those, ReddiSteddi can remove, insert or change elements to craft the ideal experience.

## How does it _really_ work? (The nerdy bit)
ReddiSteddi uses React Native and Expo and is developed primarily using TypeScript. ReddiSteddi is built around a WebView component and the injectJavaScript API. Injected scripts run in the context of the WebView and can communicate with the rest of the application through React Native's own APIs, so it is possible to implement various custom menus and options outside of the page sandbox. A custom build pipeline converts editor-friendly, lintable JavaScript and CSS into the string format required by the WebView.

## How do I get it?
Right now, ReddiSteddi is in a **very** early stage of development and isn't ready for public use yet. Developers can clone this repository and (assuming Node JS is installed) run the following commands:
`npm install`
`npx expo install`
`npm run start`
Then, using the Expo Go app on iOS or Android, scan the QR code that is shown when the build completes
Note: Any changes you make will not be automatically refreshed due to the custom build implementation. You must stop the server and run the build again.
