import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import initFirebase from "@/_services/firebase/initFirebase"
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    initFirebase()
    const logIn = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                if (user) {
                    // console.log(user);
                    router.push('/')
                }
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                setError(errorMessage)
            })
    }
    return (
        <>
            <h1>Log in</h1>
            {error && <p className="error">{error}</p>}
            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={logIn}>Log in</button>
            <Link href="/signup"></Link>
        </>
    )
}

export default LoginPage