

import {RecoilRoot  ,atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';
function App() {
  
   return(
   <>
   <RecoilRoot>
    <Counter/>
   </RecoilRoot>
   
   
   </>
   )
}

function Counter(){
  return(
    <div>
      <Counts/>
      <Increase  />
      <Decrease  />
    </div>
  )
}
function Counts(){
  const count = useRecoilValue(counterAtom)
  return(<div>
    {count}
  </div>
  )
}
function Increase(){

  const setCount = useSetRecoilState(counterAtom)
  function increase(){
    setCount(c=>c+1);
  }

 return(<div>
  <button onClick={increase}>increase</button>
  </div>
 )
 }
 function Decrease(){
  const setCount = useSetRecoilState(counterAtom)
  function decrease(){
    setCount(c=>c-1);
  }
  return(<div>

   <button onClick={decrease}>decrease</button>
   </div>
  )
  }


export default App;
