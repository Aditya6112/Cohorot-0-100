import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atom'
import { useMemo } from 'react'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}
function MainApp() {
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  // const totalNotificationCount = useMemo(()=>{
  //   return networkCount+jobsCount+messagingCount+notificationCount
  // },[networkCount,jobsCount,messagingCount,notificationCount])
  return (
    <>
      <button>Home</button>
      <button>My Networks({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Me({totalNotificationCount})</button>
    </>
  )
}
export default App
