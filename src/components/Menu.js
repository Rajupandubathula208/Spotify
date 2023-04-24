import React, { useEffect } from 'react'

const Menu = ({title,menuObject}) => {

  useEffect(()=>{
  const allLi=document.querySelector(".MenuContainer ul")
  .querySelectorAll("li")

  function changeMenuactive(){
    allLi.forEach((n)=>n.classList.remove('active'))
    this.classList.add("active");
  }


  allLi.forEach((n)=>n.addEventListener("click",changeMenuactive))
  },[])

  return (
    <div className='MenuContainer'>
        <p className='title'>{title}</p>
          <ul>
             {menuObject && menuObject.map((menu)=>(
                <li key={menu.id}>
                    <a href='#'>
                        <i>{menu.icon}</i>
                        <span>{menu.name}</span>
                    </a>
                </li>
             ))}
          </ul>
      
    </div>
  )
}

export  {Menu}
