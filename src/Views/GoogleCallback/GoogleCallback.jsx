import { useState, useEffect} from 'react';
import { getXsrfToken, handleCallbackFromGoogle } from '../../Api/Auth';

const GoogleCallback = () => {
    const [user, setUser] = useState(); 

    useEffect(() => {
        const getCallback = async () => {
            const token = await getXsrfToken()
            const data = await handleCallbackFromGoogle(token)

            if (data) {
                setUser(data)
            }
        }
        getCallback();
    }, [])
    
    return (
        <div>
            <details>
                <summary>Welcome {user.name}</summary>
                <p>Here is your info: </p>
                <code className="Code-block">{JSON.stringify(user, null, 2)}</code>
            </details>
        </div>
    );
}

export default GoogleCallback;