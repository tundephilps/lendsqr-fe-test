import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import '../styles/Tooltip.scss';

interface TooltipProps {
    data: any;
    visible: boolean;
    position: { top: number; left: number };
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({ data, visible, position, onMouseEnter, onMouseLeave }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`tooltipWrapper ${visible ? 'visible' : ''}`}
            style={{ top: position.top - 20 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <button onClick={() => navigate("/user-details/" + data.username) }><FontAwesomeIcon icon={solidIcon.faEye} className="icon"/> View details</button>
            <button><FontAwesomeIcon icon={solidIcon.faUserTimes} className="icon"/> Blacklist User</button>
            <button><FontAwesomeIcon icon={solidIcon.faUserCheck} className="icon orange"/> Activate User</button>
        </div>
    );
};

export default Tooltip;
