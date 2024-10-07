import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer =()=> {

    return(
        <footer>

            <div>
                
                <div className="footer">
                    <p>Follow me</p>
                    
                    
                    <h3>E-boutiqu</h3><br />
                    Explore the world finest handmade outfits
                
               <a href="https://www.facebook.com/"><FaFacebook/></a>
               <a href="https://www.linkedin.com/in/bousso-diallo-062836108/"> <FaLinkedin/></a>
               <a href="https://github.com/Adjibousso"><FaGithub/> </a>
               
                </div>
            </div>
        </footer>
    )
}

export default Footer 