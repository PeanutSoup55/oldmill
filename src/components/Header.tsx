import { useState } from "react";


function Header() {
    const [hover, setHover] = useState(Boolean);
    
    return (
        <div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Order</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <img src="" alt="ooga" />
            </div>
        </div>
    )
}

export default Header;