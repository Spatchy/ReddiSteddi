import { WebViewPages } from "../../types/WebViewPages";

const pageRegExps: Record<WebViewPages, RegExp[]> = {
  LOGIN: [
    /reddit\.com\/login/g
  ],
  FEED: [
    /reddit\.com\/?(?=\?|$)/g
  ]
}

export const urlPageMapper = (url: string): WebViewPages | undefined => {
  const pageKeys: (string)[] = Object.keys(pageRegExps)
  for (const key of pageKeys) {
    const refKey = key as keyof typeof WebViewPages
    if (pageRegExps[refKey].some((rx) => rx.test(url))) {
      return WebViewPages[refKey]
    }
  }
}