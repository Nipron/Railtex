import React, {useState, useEffect} from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

const Header = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [styles, setStyles] = useState([, "current", "unvisited", "unvisited", "unvisited"]);

    const handleClick = (currentPage) => {
        setCurrentPage(currentPage);
    };

    useEffect(() => {
        if (currentPage === 1) setStyles([, "current", "unvisited", "unvisited", "unvisited"]);
        if (currentPage === 2) setStyles([, "visited", "current", "unvisited", "unvisited"]);
        if (currentPage === 3) setStyles([, "visited", "visited", "current", "unvisited"]);
        if (currentPage === 4) setStyles([, "visited", "visited", "visited", "current"]);
        console.log(styles);
    }, [currentPage]);

    return (
        <div className="header">
            <ul>
                <li className={styles[1]}>
                    <Link to="/" onClick={() => handleClick(1)}>
                        CONTACTS
                    </Link>
                </li>
                <li className={styles[2]}>
                    <Link to="/step2" onClick={() => handleClick(2)}>
                        ADDRESS
                    </Link>
                </li>
                <li className={styles[3]}>
                    <Link to="/step3" onClick={() => handleClick(3)}>
                        CATEGORIES
                    </Link>
                </li>
                <li className={styles[4]}>
                    <Link to="/step4" onClick={() => handleClick(4)}>
                        SUCCESS
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;