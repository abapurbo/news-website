import React, { useState } from "react";
import '../../Styles/layout.css'
import '../../Styles/responsive.css'
export default function Navbar() {
    const [menu, setMenu] = useState()
    console.log(menu)
    return (
        <>
            <nav id="nav-container" className="lato-thin">
                <div className="logo-container">
                    <h1 className="logo">Ajker<span className="nav-logo">Khabar</span></h1>
                    {/* menu icon */}
                    <div onClick={() => setMenu(!menu)} className="menu-icon">
                        {
                            menu ?<p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                            </p>:<p> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></p> 
                        }
                    </div>
                </div>
                <div>
                    <ul class="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">National</a></li>
                        <li><a href="#">International</a></li>
                        <li><a href="#">Sports</a></li>
                    </ul>

                </div>
                <div className="search-conatiner">
                    <input class="search-input" type="text" placeholder="Search news, topics…" />
                </div>

            </nav>
        </>
    );
}
