import React from 'react'
import { Link } from 'react-router-dom'
import MenuLinks from '../../Assets/JSON/MenuLinks.json'

function StudentMenuList() {

    return (
        <>
            <div>
                {
                    MenuLinks?.StudentMenu?.menuitem?.map((items, i) => (
                        <p className='hover:font-semibold my-2'>  <Link key={i} to={items.menuLink} >{items.menuName}</Link></p>
                    ))
                }
                <p className='border-b'></p>
            </div>
        </>
    )
}

export default StudentMenuList

/*
Exported to -
1. AdminSidebarIndex.js
2. MobileSideBar
*/