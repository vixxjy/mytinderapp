import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
           
            <img 
                className="header__logo"
                src="https://styles.redditmedia.com/t5_2w7mz/styles/communityIcon_jmyuhs81jl211.png?width=256&s=a23d21debdfe842e1b4d9ce3c24f3ab8be5d0e18"
                alt=""
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
           
        </div>
    )
}

export default Header
