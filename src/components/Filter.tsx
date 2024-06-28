import React from 'react';
import '../styles/Filter.scss';

interface FilterProps {
    visible: boolean;
    position: { top: number; left: number };
}

const Filter = React.forwardRef<HTMLDivElement, FilterProps>(({ visible, position }, ref) => {
    
    return (
        <div
            ref= { ref }
            className={`filterWrapper ${visible ? 'visible' : ''}`}
            style={{ top: position.top, left : position.left }}
        >
           <div className="inputBox">
                <p className="title">Organization</p>
                <select className="input">
                    <option value="" selected disabled> Select </option>
                </select>
           </div>
           <div className="inputBox">
                <p className="title">Username</p>
                <input className="input"/>
           </div>
           <div className="inputBox">
                <p className="title">Email</p>
                <input className="input"/>
           </div>
           <div className="inputBox">
                <p className="title">Date</p>
                <input className="input" type="date"/>
           </div>
           <div className="inputBox">
                <p className="title">Phone Number</p>
                <input className="input"/>
           </div>
           <div className="inputBox">
                <p className="title">Status</p>
                <select className="input">
                    <option value="" selected disabled> Select </option>
                    <option value="active" selected disabled> Active </option>
                    <option value="inactive" selected disabled> In Active </option>
                    <option value="blacklisted" selected disabled> Blacklisted </option>
                    <option value="pending" selected disabled> Pending </option>
                </select>
           </div>

           <div className="buttons">
                <button className="reset">Reset</button>
                <button className="filter">Filter</button>
           </div>
        </div>
    );
});

export default Filter;
