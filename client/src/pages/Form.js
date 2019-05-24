import React from 'react'
import { useState } from 'react'
import userInfoApiFromLocalHost from '../apis/destinations';

export default function Form() {
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
        const handleChange = event => setValue(event.target.value);
        return { value: value, onChange: handleChange };
    };

    const userName = useFormInput('');
    const lastName = useFormInput('');
    const birth = useFormInput('');
    const country = useFormInput('');
    const profilePicture = useFormInput('');
    const description = useFormInput('');
    const profession = useFormInput('');
    const skills = useFormInput('');
    const workExp = useFormInput('');

    async function sendReq(event) {
        event.preventDefault()
        try {
            await userInfoApiFromLocalHost.post('/api/destinations', {
                name: userName.value,
                lastName: lastName.value,
                dateOfBirth: birth.value,
                profession: profession.value,
                profilePicture: profilePicture.value,
                description: description.value,
                country: country.value,
                skills:skills.value,
                workExperience:workExp.value
            });

        } catch (error) {
            console.log(error)
        }
    }
    return (
        
        
        <form onSubmit={sendReq}>
            <h2 className="useradder">Add Employeer</h2>
            <input type='text' placeholder='name...' {...userName} />
            <input type='text' placeholder='Last Name' {...lastName} />
            <input type='text' placeholder='birth' {...birth} />
            <input type='text' placeholder='country' {...country} />
            <input type='text' placeholder='profilePicture' {...profilePicture} />
            <input type='textarea' placeholder='description' {...description} />
            <input type='text' placeholder='profession' {...profession} />
            <input type='text' placeholder='skills' {...skills} />
            <input type='text' placeholder='workExpperience' {...workExp} />
            <input type='submit' value='Add Employeer' />
        </form>
       
    );
}
