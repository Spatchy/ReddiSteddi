import React from "react"
import { View, StyleSheet } from "react-native"

import SvgComponent from "./SvgComponent"

const LoadingAnimation = () => {

  return (
    <View style={styles.container}>
      <SvgComponent width={100} height={100} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
})

export default LoadingAnimation
