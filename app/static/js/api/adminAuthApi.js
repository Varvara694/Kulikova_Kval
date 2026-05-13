const API_URL = 'https://kulikova-kval.onrender.com/api/admin';

export async function adminLogin(data) {

    const response = await fetch(
        `${API_URL}/login`,
        {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        }
    );

    return await response.json();
}
