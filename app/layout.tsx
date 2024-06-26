import { FC, PropsWithChildren } from 'react'

// Even though this component is just passing its children through, the presence
// of this file fixes an issue in Next.js 13.4 where link clicks that switch
// the locale would otherwise cause a full reload.
const RootLayout: FC<PropsWithChildren> = ({ children }) => children
export default RootLayout
