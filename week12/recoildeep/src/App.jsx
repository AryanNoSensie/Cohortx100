import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue  , RecoilRoot} from 'recoil'
import { JobsAtom, NetworkAtom ,MessagingAtom , NotificationAtom} from '../atom'

function App(){

  

  return(<div>
   <RecoilRoot>
     <MainApp/>
   </RecoilRoot>
  </div>

  )
}

function MainApp(){
  const networksCount = useRecoilValue(NetworkAtom);
  const jobsCount  = useRecoilValue(JobsAtom);
  const MesaageCount  = useRecoilValue(MessagingAtom);
  const NotificationCount = useRecoilValue(NotificationAtom);

  return(<div>
    <button>home </button>
    <button>My network ({networksCount >=100 ? "99+" :networksCount}) </button>
    <button>Jobs {jobsCount} </button>
    <button>Messaging {MesaageCount}</button>
    <button>Notifications {NotificationCount}</button>
    <button>Me </button>
  </div>

  )
}

export default App
