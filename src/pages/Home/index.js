import React, { useState } from 'react'
import { Link, useHistory, useParams } from "react-router-dom";

function Home(props) {
    let history = useHistory();
    const [fullName, setFullName] = useState('');
    const [id, setID] = useState();
    function goSearch() {
        history.push('/search/' + fullName + '/' + id)
    }

    return (
        <div>
            <form>
                <input value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input value={id}
                    onChange={(e) => setID(e.target.value)}
                />
                <button onClick={goSearch} class="btn">
                    Click go to search
            </button>
            </form>
        </div>
    );
}

export default Home;