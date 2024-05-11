import React from 'react'

export default function Header() {

    let ul_list = React.createRef()
    let li_commonref = React.createRef()
    let nav_status = true

    function openBurger() {
        if (nav_status == true) {
            ul_list.current.style.display = 'none'
            li_commonref.current.style.backgroundColor = 'white'
            li_commonref.current.style.border = '20px'
            nav_status = false
        } else {
            li_commonref.current.style.backgroundColor = 'rgb(241, 241, 241)'
            ul_list.current.style.display = 'block'
            nav_status = true
        }
    }

    let navbarref = React.createRef()
    let headerref = React.createRef()
    let togglebutref = React.createRef()

    let navbar_status = true

    function togglebar() {
        if (navbar_status == true) {
            navbarref.current.style.display = 'none'
            togglebutref.current.style.display = 'block'
            togglebutref.current.style.position = 'fixed'
            togglebutref.current.style.marginTop = '37px' 
            navbar_status = false
        } else {
            navbarref.current.style.display = 'block' 
            togglebutref.current.style.position = 'fixed'
            togglebutref.current.style.marginTop = '0' 
            navbar_status = true
        }
    }

    return (
        <header className="header" ref={headerref}>
            <div className='toggle-button'><img src="https://www.turbopersonaltraining.com/wp-content/uploads/2022/10/Hamburger_icon.svg_-2.png" type='button' onClick={togglebar} alt="" ref={togglebutref} /></div>
            <div className='outer-block-navbar'>
                <div className="navbar--menu" ref={navbarref}>
                    <nav className='navbar'>
                        <a href="#" className="logo--x">
                            <img src="images/1xtwitter.png" alt="" />
                        </a>
                        <ul className='ul_main'>
                            <a href="/" className="link--l1 link">
                                <div className="img--l1 img-l"><img src="images/image 2home.png" alt="" /></div>
                                <div className="name-l"> <h4>Home</h4></div>
                            </a>
                            <a href="#" className="link--l2 link">
                                <div className="img--l2 img-l"><img src="images/image 3explore.png" alt="" /></div>
                                <div className="name-l"> <h4>Explore</h4></div>
                            </a>
                            <a href="#" className="link">
                                <div className="img--l3 img-l"> <img src="images/image 4notific.png" alt="" /></div>
                                <div className="name-l"><h4>Notifications</h4></div>
                            </a>
                            <a href="#" className="link">
                                <div className="img--l4 img-l"> <img src="images/image 5messag.png" alt="" /></div>
                                <div className="name-l"><h4>Messages</h4></div>
                            </a>
                            <a href="#" className="link">
                                <div className="img--l5 img-l"> <img src="images/image 6lists.png" alt="" /></div>
                                <div className="name-l"><h4>Bookmarks</h4></div>
                            </a>
                            <a href="/lists" className="link">
                                <div className="img-l"><img src="images/image 9bookm.png" alt="" /></div>
                                <div className="name-l"><h4>Lists</h4></div>
                            </a>
                            <a href="/profile" className="link">
                                <div className="img-l"><img src="images/WhatsApp Image 2024-03-25 at 16.43 1pi4game.png" alt="" /></div>
                                <div className="name-l"><h4>Profile</h4></div>
                            </a>
                            <li className='li-common' ref={li_commonref}>
                                <a href="####" className="link" onClick={openBurger}>
                                    <div className="img-l"><img src="images/image 8more.png" alt="" /></div>
                                    <div className="name-l"><h4>More</h4></div>
                                </a>
                                <ul class="ul_more" ref={ul_list}>
                                    <li><a href="#">Monetization</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Settings</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="post--but"><button type="button">Post</button></div>
                </div>
            </div>
        </header>
    )
}
