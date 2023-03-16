import React from "react";
import {useForm} from "react-hook-form";

const LoginForm = (props) => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {errors?.email && <p>{errors?.email.message || 'Error!'}</p>}
                <input placeholder={'email'} {...register('email', {
                    required: 'поле обязательно к заполнению',
                    pattern: {
                        value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter valid email!',
                    }
                })
                } />
            </div>
            <div>
                {errors?.password && <p>{errors?.password.message || 'Error!'}</p>}
            </div>
            <input type='password' placeholder={'password'} {...register('password', {
                required: 'поле обязательно к заполнению',
                pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
                    message: 'Please enter valid password'
                },
                minLength: {
                    value: 6,
                    message: 'минимальная длина шесть символов'
                }
            })
            } />
            <div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    </div>
}
export default LoginForm


