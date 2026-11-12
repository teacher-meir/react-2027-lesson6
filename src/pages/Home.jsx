import React from 'react'
import { useNavigate } from 'react-router';

export default function Home() {
  // use - hooks חייבות להיות ישירות בתוך קומפוננטה
  // פונקציה שמנווטת דרך הקוד
  const navigate1 = useNavigate();

  // onSubmit
  const oldSave = (ev) => {
    // 1. למנוע שליחה לעמוד אחר
    ev.preventDefault();
    // 2. לרוקן את הטופס
    // לשלוח לשרת
  };

  const save = (data) => {
    // data - Map/Dictionary שמכיל את כל נתוני הטופס
    console.log(data);

    const obj = {
      username: data.get('username'),
      password: data.get('password'),
    };

    if (obj.username === obj.password) {
      // מקבל ניתוב לעבור אליו
      navigate1('about1111');
    }

    console.log(obj);
  };

  return (
    <div>
      {/* controlled - onChange */}
      {/* uncontrolled form - action, useRef */}
      {/* action - לא מרענן עמוד ומרוקן טופס */}
      <form action={save} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
        <button>OK</button>
      </form>
    </div>
  )
}
