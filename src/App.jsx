import { Link, NavLink, Route, Routes } from 'react-router'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import AddProduct from './pages/AddForm'

function App() {
  // SPA - Single Page Application
  // אפליקצית דף יחיד
  // בודד HTML דף

  // יתרון
  // מאוד מהיר

  // חסרון
  // 1. לא כ"כ טוב למנועי חיפוש - server components
  // 2. טעינה ראשונית איטית - כל הקבצים מגיעים מיד בטעינה הראשונית - lazy loading

  return (
    <>
    {/* 3. a קישור שיעבור כמו */}
      <nav>
        {/* <a href="/">הבית</a>
            <a href="about">אודות</a> */}
        <NavLink to='/'>🏡</NavLink> | 
        <NavLink to='about1111'>אודות</NavLink> | 
        <NavLink to='list'>מוצרים</NavLink>
      </nav>
      <hr />

      {/* 2. טבלת ניתובים */}
      <Routes>
        {/* שאר הניתובים */}
        <Route path='*' element={<h1>Opps!!!! 404 - page not found!!!!!!!!</h1>} />

        <Route index element={<Home />} />
        <Route path='about1111' element={<About />} />
        <Route path='list' element={<h1>my list</h1>} />
      </Routes>
      <AddProduct />
    </>
  )
}

export default App
