import React from "react";
import "./myStyle.css";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import logo from "../images/chat.png";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";




function Users_Groups()
{
    const lightTheme=useSelector((state)=>state.themeKey);

    return (
        <AnimatePresence>
                 <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{ease:"anticipate",duration:"0.3" }}
                 className="list-container">
        <div className={"ug-header"+(lightTheme ?"":" dark")}>
            <img src={logo} style={{height:"2rem",width:"2rem",marginLeft:"10px"}}/>
            <p className={"ug-title"+(lightTheme ?"":" dark")}>Online_Users</p>
        </div>

        <div className={"sb-search"+(lightTheme ?"":" dark")}>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder="Search" className={"search-box"+(lightTheme ?"":" dark")}/>
        </div>

        <div className="ug-list">
                <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}} className={"list-tem"+(lightTheme ?"":" dark")}>
                    <p className="con-icon">T</p>
                    <p className="con-title">Test Users</p>
                </motion.div>

                <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}} className={"list-tem"+(lightTheme ?"":" dark")}>
                    <p className="con-icon">T</p>
                    <p className="con-title">Test Users</p>
                </motion.div>

                <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}} className={"list-tem"+(lightTheme ?"":" dark")}>
                    <p className="con-icon">T</p>
                    <p className="con-title">Test Users</p>
                </motion.div>

                <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}} className={"list-tem"+(lightTheme ?"":" dark")}>
                    <p className="con-icon">T</p>
                    <p className="con-title">Test Users</p>
                </motion.div>

                <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}} className={"list-tem"+(lightTheme ?"":" dark")}>
                    <p className="con-icon">T</p>
                    <p className="con-title">Test Users</p>
                </motion.div>

                <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}} className={"list-tem"+(lightTheme ?"":" dark")}>
                    <p className="con-icon">T</p>
                    <p className="con-title">Test Users</p>
                </motion.div>
                
        </div>
    </motion.div>
        </AnimatePresence>
   
    );
}

export default Users_Groups;