

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import List from './components/List'
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'
import ShowCreators from './pages/ShowCreators'
import EditCreator from './pages/EditCreator'

function App() {

  return (
    <div className="relative bg-black">
      <Routes>
        <Route path='/' element={<Banner />}   />
        <Route path='/' element={<List />} />
        <Route path='/add' element={<AddCreator />} />
        <Route path='/editcreator' element={<EditCreator />} />
        <Route path='/showcreators' element={<ShowCreators />} />
        <Route path='/viewcreator' element={<ViewCreator />} />
      </Routes>
    </div>
  )
}

export default App
