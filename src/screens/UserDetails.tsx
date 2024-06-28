import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faStar } from '@fortawesome/free-solid-svg-icons';

import "../styles/UserDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import useUserDetails from "../hooks/UserDetails.ts";
import NotFound from "../components/NotFound.tsx";

const UserDetails = () => {
    const navigate = useNavigate();
    const { username } = useParams();
    const { userDetails, isLoading } = useUserDetails(username);

    if(!username){
        return <NotFound title="User not found"/>
    }

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="userDetailsWrapper">
                    <button className="back" onClick={() => navigate("/users")}><FontAwesomeIcon icon={faArrowLeft} className="icon"/>Back to Users</button>
                    <div className="introWrapper">
                        <h3 className="pageTitle">User Details</h3>
                        <div className="buttons">
                            <button className="blacklist">BLACKLIST USER</button>
                            <button className="activate">ACTIVATE USER</button>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="content">
                            <div className="item userItem">
                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                <div className="subitem">
                                    <p className="title">{userDetails.username}</p>
                                    <p className="label">76tsdf6gf</p>
                                </div>
                            </div>
                            <div className="item middleItem">
                                <p className="label">User's Tier</p>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className="icon"/>
                                    <FontAwesomeIcon icon={faStar} className="icon"/>
                                    <FontAwesomeIcon icon={faStar} className="icon"/>
                                </div>
                            </div>
                            <div className="item">
                                <p className="title">200,000</p>
                                <p className="label">766734732/Providus</p>
                            </div>
                        </div>
                        <div className="buttonWrapper">
                            <button className="active">General Details</button>
                            <button>Documents</button>
                            <button>Bank Details</button>
                            <button>Loans</button>
                            <button>Savings</button>
                            <button>App and System</button>
                        </div>
                    </div>

                    <div className="content">
                        <div className="item">
                            <p className="category">Personal Information</p>

                            <div className="cards">
                                <div className="card">
                                    <p className="title">FULL NAME</p>
                                    <p className="label">{userDetails.firstName + " " + userDetails.lastName}</p>
                                </div>
                                <div className="card">
                                    <p className="title">PHONE NUMBER</p>
                                    <p className="label">{ userDetails.phone }</p>
                                </div>
                                <div className="card">
                                    <p className="title">EMAIL</p>
                                    <p className="label">{ userDetails.email } </p>
                                </div>
                                <div className="card">
                                    <p className="title">BVN</p>
                                    <p className="label">{ userDetails.ssn }</p>
                                </div>
                                <div className="card">
                                    <p className="title">GENDER</p>
                                    <p className="label">{ userDetails.gender }</p>
                                </div>
                                <div className="card">
                                    <p className="title">MARITAL STATUS</p>
                                    <p className="label">Married</p>
                                </div>
                                <div className="card">
                                    <p className="title">CHILDREN</p>
                                    <p className="label">4</p>
                                </div>
                                <div className="card">
                                    <p className="title">TYPE OF RESIDENCE</p>
                                    <p className="label">Parent Apartment</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <p className="category">Education and Employment</p>

                            <div className="cards">
                                <div className="card">
                                    <p className="title">LEVEL OF EDUCATION</p>
                                    <p className="label">B.Sc</p>
                                </div>
                                <div className="card">
                                    <p className="title">EMPLOYMENT STATUS</p>
                                    <p className="label">Employed</p>
                                </div>
                                <div className="card">
                                    <p className="title">SECTOR OF EMPLOYMENT</p>
                                    <p className="label">Fintech</p>
                                </div>
                                <div className="card">
                                    <p className="title">DURATION OF EMPLOYMENT</p>
                                    <p className="label">2 Years</p>
                                </div>
                                <div className="card">
                                    <p className="title">OFFICE EMAIL</p>
                                    <p className="label">grace@lendsqr.com</p>
                                </div>
                                <div className="card">
                                    <p className="title">MONTHLY INCOME</p>
                                    <p className="label">NGN200,000 - NGN400,000</p>
                                </div>
                                <div className="card">
                                    <p className="title">LOAN REPAYMENT</p>
                                    <p className="label">40,000</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <p className="category">Socials</p>

                            <div className="cards">
                                <div className="card">
                                    <p className="title">TWITTER</p>
                                    <p className="label">@grace_lendsqr</p>
                                </div>
                                <div className="card">
                                    <p className="title">FACEBOOK</p>
                                    <p className="label">@grace_lendsqr</p>
                                </div>
                                <div className="card">
                                    <p className="title">INSTAGRAM</p>
                                    <p className="label">@grace_lendsqr</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <p className="category">Guarantor</p>

                            <div className="cards">
                                <div className="card">
                                    <p className="title">FULL NAME</p>
                                    <p className="label">Grace Debby</p>
                                </div>
                                <div className="card">
                                    <p className="title">PHONE NUMBER</p>
                                    <p className="label">09094875643</p>
                                </div>
                                <div className="card">
                                    <p className="title">EMAIL ADDRESS</p>
                                    <p className="label">debby@gmail.com</p>
                                </div>
                                <div className="card">
                                    <p className="title">RELATIONSHIP</p>
                                    <p className="label">Sister</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <p className="category">Guardian</p>

                            <div className="cards">
                                <div className="card">
                                    <p className="title">FULL NAME</p>
                                    <p className="label">Grace Debby</p>
                                </div>
                                <div className="card">
                                    <p className="title">PHONE NUMBER</p>
                                    <p className="label">09094875643</p>
                                </div>
                                <div className="card">
                                    <p className="title">EMAIL ADDRESS</p>
                                    <p className="label">debby@gmail.com</p>
                                </div>
                                <div className="card">
                                    <p className="title">RELATIONSHIP</p>
                                    <p className="label">Sister</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserDetails;