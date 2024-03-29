// import { useState } from "react"

// function ConForm(){
//     const [name ,setName]=useState()
//     function submitForm(e){
//         e.preventDefault()
     
//         console.log(name)
//     }
    
//     return(
//         <div>
//          <form onSubmit={submitForm}>
//             <input id="email" type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input>
//             <button>Submit</button>
//          </form>
//         </div>
//     )
// }
// export default ConForm




import { useState } from "react";

function ConForm() {
    const [name, setName] = useState("");
    const [emailError, setEmailError] = useState("");

    function validateEmail(email) {
        // Regular expression for validating an email address
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    } 

    function submitForm(e) {
        e.preventDefault();

        if (!validateEmail(name)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        // Clear any previous error message
        setEmailError("");

        console.log(name);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) => setName(e.target.value)}
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ConForm;
