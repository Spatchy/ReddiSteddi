import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    {...props}
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    viewBox="0 0 3334 2500"
  >
    <Path
      d="M3239 1272.7c0-451.856-366.849-818.705-818.704-818.705H913.036c-451.856 0-818.705 366.849-818.705 818.705 0 451.855 366.849 818.704 818.705 818.704h1507.26c451.855 0 818.704-366.849 818.704-818.704Z"
      fill="#b10049"
    />
    <Path
      d="M1553.87 1460.61c10.4 0 18.6 4.8 24.6 14.4 6 9.6 9 22.8 9 39.6 0 31.2-7.6 56-22.8 74.4-38.4 46.4-77.2 82.2-116.4 107.4-39.2 25.2-85.6 37.8-139.2 37.8-52 0-96.2-14-132.6-42-36.4-28-71-76-103.8-144-26.4-54.4-47.2-94.6-62.4-120.6-15.2-26-30.2-44.6-45-55.8-14.8-11.2-33-18-54.6-20.4-3.2 16.8-12.4 69.6-27.6 158.4-6.4 40-10.4 64.4-12 73.2-8 48.8-24 86.2-48 112.2s-60.4 39-109.2 39c-53.6 0-101-15.8-142.2-47.4-41.2-31.6-73-75.6-95.4-132-22.4-56.4-33.6-120.6-33.6-192.6 0-134.4 23.4-250.4 70.2-348 46.8-97.6 112.4-172.2 196.8-223.8 84.4-51.6 181.8-77.4 292.2-77.4 76.8 0 141.2 11.6 193.2 34.8 52 23.2 90.6 55.2 115.8 96 25.2 40.8 37.8 86.8 37.8 138 0 44.8-10.6 88.6-31.8 131.4-21.2 42.8-53 80.6-95.4 113.4-42.4 32.8-94 57.2-154.8 73.2 38.4 10.4 68 27.2 88.8 50.4 20.8 23.2 41.6 57.2 62.4 102 22.4 48 44.6 83.2 66.6 105.6 22 22.4 47.4 33.6 76.2 33.6 25.6 0 50-8.6 73.2-25.8 23.2-17.2 52.4-46.6 87.6-88.2 9.6-11.2 20.4-16.8 32.4-16.8Zm-808.8-110.4c-27.2 0-45.8-6.4-55.8-19.2-10-12.8-15-27.2-15-43.2 0-19.2 6.2-34.4 18.6-45.6 12.4-11.2 26.6-16.8 42.6-16.8h30c12.8-78.4 24.8-146 36-202.8 10.4-52 44-78 100.8-78 45.6 0 68.4 20.4 68.4 61.2 0 8.8-.4 15.6-1.2 20.4l-36 199.2c43.2-2.4 82.6-12.8 118.2-31.2 35.6-18.4 64-44 85.2-76.8 21.2-32.8 31.8-70 31.8-111.6 0-50.4-17.2-90-51.6-118.8-34.4-28.8-84.8-43.2-151.2-43.2-78.4 0-147 19.4-205.8 58.2-58.8 38.8-104.6 96.4-137.4 172.8-32.8 76.4-49.2 169.4-49.2 279 0 51.2 5.2 95.2 15.6 132 10.4 36.8 23.2 64.4 38.4 82.8 15.2 18.4 29.6 27.6 43.2 27.6 10.4 0 19-5.2 25.8-15.6 6.8-10.4 12.2-27.2 16.2-50.4l32.4-180ZM1647.47 1089.81c-33.6 0-58.8-7.8-75.6-23.4-16.8-15.6-25.2-37.4-25.2-65.4 0-28 11-51.4 33-70.2 22-18.8 49.4-28.2 82.2-28.2 29.6 0 53.6 7.2 72 21.6 18.4 14.4 27.6 34.8 27.6 61.2 0 32-10.4 57.4-31.2 76.2-20.8 18.8-48.4 28.2-82.8 28.2ZM2120.27 1737.81c-106.4 0-191.6-20.2-255.6-60.6-64-40.4-96-102.2-96-185.4 0-44 7.6-77.6 22.8-100.8 15.2-23.2 37.6-34.8 67.2-34.8 21.6 0 39.2 5.6 52.8 16.8 13.6 11.2 20.4 25.6 20.4 43.2 0 16-1.2 30-3.6 42 0 3.2-.6 8.8-1.8 16.8-1.2 8-1.8 16.4-1.8 25.2 0 36 18.2 62.8 54.6 80.4 36.4 17.6 87.4 26.4 153 26.4 68 0 121.2-12.2 159.6-36.6 38.4-24.4 57.6-58.6 57.6-102.6 0-27.2-8.8-50.6-26.4-70.2-17.6-19.6-39.6-36-66-49.2-26.4-13.2-63.6-29.4-111.6-48.6-61.6-24-111.8-46.8-150.6-68.4-38.8-21.6-72-51-99.6-88.2-27.6-37.2-41.4-83.4-41.4-138.6 0-57.6 15.4-108.8 46.2-153.6 30.8-44.8 75.2-79.6 133.2-104.4 58-24.8 126.2-37.2 204.6-37.2 58.4 0 112 8.6 160.8 25.8 48.8 17.2 87.8 43.4 117 78.6 29.2 35.2 43.8 78.4 43.8 129.6 0 50.4-7.6 88.4-22.8 114-15.2 25.6-37.6 38.4-67.2 38.4-20.8 0-38.2-6.4-52.2-19.2-14-12.8-21-28-21-45.6 0-15.2 1.2-29.2 3.6-42 2.4-24 3.6-39.2 3.6-45.6 0-33.6-16.4-59.2-49.2-76.8-32.8-17.6-73.6-26.4-122.4-26.4-68.8 0-121.4 12.6-157.8 37.8-36.4 25.2-54.6 60.6-54.6 106.2 0 30.4 9.4 56.4 28.2 78 18.8 21.6 42.2 39.6 70.2 54 28 14.4 67.2 31.6 117.6 51.6 60.8 24.8 109.6 47.2 146.4 67.2 36.8 20 68.2 47.2 94.2 81.6 26 34.4 39 76.8 39 127.2 0 94.4-35.8 167-107.4 217.8-71.6 50.8-167.4 76.2-287.4 76.2ZM2776.67 1089.81c-33.6 0-58.8-7.8-75.6-23.4-16.8-15.6-25.2-37.4-25.2-65.4 0-28 11-51.4 33-70.2 22-18.8 49.4-28.2 82.2-28.2 29.6 0 53.6 7.2 72 21.6 18.4 14.4 27.6 34.8 27.6 61.2 0 32-10.4 57.4-31.2 76.2-20.8 18.8-48.4 28.2-82.8 28.2Z"
      fill="#fff"
      fillRule="nonzero"
    />
  </Svg>
)

export default SvgComponent