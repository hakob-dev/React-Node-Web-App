import React from 'react'
import oneUser from '../apis/destinations';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader'
export default function LearnMoreUser({ match }) {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let param = match.params.id
    useEffect(() => {
        const getUser = async () => {
            try {
                setIsLoading(true);
                const response = await oneUser.get(`/api/destinations/${param}`);
                setUser(response.data)
                console.log(response.data)
                setIsLoading(false);
            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }
        getUser()
    }, [param])
    if (isLoading) return <Loader />;
    return (
        <div className="LearnMoreUsers">
            <div className="LMUpic">
                <h2>{user.name}{" " + user.lastName}</h2>
                <p>{user.country}</p>
                <img src={user.profilePicture} className="profPic" alt='you know what this is...' />
            </div>
            <div className="LMUBio">
                <table>
                    <tr>
                        <td>Date of Birth</td>
                        <td>{user.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Profession</td>
                        <tr>{user.profession}</tr>
                    </tr>
                    <tr>
                        <td>Skills</td>
                        <td>{user.skills}</td>
                    </tr>
                    <tr>
                        <td>Work Experience</td>
                        <tr>{user.workExperience}</tr>
                    </tr>
                </table>
                {/* <p>{location.workExperience.map(el=>el+" ")}</p>
            <p>{location.skills.map(el=>el+' ')}</p> */}
            </div>
            <p class="pp">Self Introduction : {user.description}</p>
        </div >
    )
}
