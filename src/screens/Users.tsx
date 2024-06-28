import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';
import "../styles/Users.scss";
import useUsers from "../hooks/Users.ts";
import Tooltip from "../components/Tooltip.tsx";
import Filter from "../components/Filter.tsx";
import Pagination from "../components/Pagination.tsx";

const Users : React.FC = () => {
    const { isLoading, totalUsers, tooltipData, tooltipPosition, tooltipVisible, filterPosition, filterVisible, filterRef, totalPages, currentUsers, currentPage, setUsersPerPage, handleMouseEnterTooltip, handleMouseLeaveTooltip, handleMouseEnter, handleMouseLeave, handleToggleFilter, paginate } = useUsers();

    return (
        <div className="usersWrapper">
            <h3 className="pageTitle">Users</h3>
            <div className="wrapper">
                <div className="box">
                    <FontAwesomeIcon icon={solidIcon.faUsers} className="icon pink"/>
                    <p className="title">USERS</p>
                    <p className="label">12,932</p>
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={solidIcon.faUsers} className="icon purple"/>
                    <p className="title">ACTIVE USERS</p>
                    <p className="label">12,932</p>
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={solidIcon.faReceipt} className="icon orange"/>
                    <p className="title">USERS WITH LOANS</p>
                    <p className="label">12,932</p>
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={solidIcon.faCoins} className="icon red"/>
                    <p className="title">USERS WITH SAVINGS</p>
                    <p className="label">12,932</p>
                </div>
            </div>

            <div className="table">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ORGANIZATION <FontAwesomeIcon onClick={  handleToggleFilter } icon={solidIcon.faFilter} className="icon"/></th>
                                <th>USERNAME <FontAwesomeIcon onClick={  handleToggleFilter } icon={solidIcon.faFilter} className="icon"/></th>
                                <th>EMAIL <FontAwesomeIcon onClick={  handleToggleFilter } icon={solidIcon.faFilter} className="icon"/></th>
                                <th>PHONE NUMBER <FontAwesomeIcon onClick={  handleToggleFilter } icon={solidIcon.faFilter} className="icon"/></th>
                                <th>DATE JOINED <FontAwesomeIcon onClick={  handleToggleFilter } icon={solidIcon.faFilter} className="icon"/></th>
                                <th>STATUS <FontAwesomeIcon onClick={  handleToggleFilter } icon={solidIcon.faFilter} className="icon"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((item, key) => {
                                //using eye color to represent status
                                
                                let status = "active";
                                switch(item.eyeColor){
                                    case "Red" : status = "inactive"; break;
                                    case "Blue" : status = "blacklisted"; break;
                                    case "Hazel" : status = "pending"; break;
                                    case "Brown" : status = "active"; break;
                                    case "Violet" : status = "inactive"; break;
                                }
                                
                                return(
                                    <tr>
                                        <td>{item.role}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.birthDate}</td>
                                        <td><button className={"status status-" + status}>{status}</button></td>
                                        <td>
                                            <FontAwesomeIcon
                                                icon={solidIcon.faEllipsisV}
                                                className="icon"
                                                onMouseEnter={(e) => handleMouseEnter(e, item)}
                                                onMouseLeave={handleMouseLeave}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
                <Tooltip
                    data={tooltipData}
                    visible={tooltipVisible}
                    position={tooltipPosition}
                    onMouseEnter={handleMouseEnterTooltip}
                    onMouseLeave={handleMouseLeaveTooltip}
                />

                {filterVisible && <Filter ref={filterRef} visible={filterVisible} position={filterPosition}/>}
            </div>

            <Pagination totalPages={ totalPages } currentPage = { currentPage } paginate = { paginate } setUsersPerPage={ setUsersPerPage } totalUsers={totalUsers} />
        
        </div>
    )
}

export default Users;