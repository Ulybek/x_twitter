import React from 'react'

export default function Profile() {
    return (
        <div className="profile--content">
            <div className="box-content">
                <div className="rectangle-block"></div>
                <div className="under-rect">
                    <div className="profile-img"><img src="/images/WhatsApp Image 2024-03-25 at 16.43 2pi4game-profile (1).png" alt="" /></div>
                    <div className="button-edit-profile">
                        <button>Edit profile</button>
                    </div>
                </div>
            </div>
            <div className="description">
                <div class="account">
                    <h3>PI4 GAME</h3>
                    <h4>@Pi4GameF5</h4>
                </div>
                <div className="profile-about">
                    <p>I love doing things that I have passion for it! Especially, sport and music activities!   </p>
                </div>
                <div className="profile-rating">
                    <div className="following"><span>0</span>
                        <p>Following</p>
                    </div>
                    <div className="followers"><span>0</span>
                        <p>Followers</p>
                    </div>
                </div>
                <div className="profile-links">
                    <a href="#" className="info">
                        <p>https://funguypi4game.com</p>
                    </a>
                    <a href="#" className="info">
                        <p>+ 7 701 803 5557</p>
                    </a>
                </div>
            </div>
            <div className='stick-3'></div>
        </div>
    )
}
