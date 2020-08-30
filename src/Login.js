import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './stateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {

        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="data:image/png;base64,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" alt="" />
                <img src="https://images.squarespace-cdn.com/content/v1/571519502b8dde27388085af/1517850933110-RFMJQMB1AONM0QHGTHFZ/ke17ZwdGBToddI8pDm48kI9EvrtAW-DHTek6ExOIUXgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2diqev44jJUrIchUr4Xd8Lp198UcUq-K82hhJD2wpz0zRCjLISwBs8eEdxAxTptZAUg/Facebook-06-2015-Blue.png?format=1500w" alt="" />
                <Button type="submit" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
