import React from "react";
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }

    if(props.isAuth) return <Navigate to={'/Profile'} />


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
                <input {...register("checkbox")} type="checkbox"/>
                Запомнить пользователя
            </div>
            <div>
                <div>
                    <button disabled={!isValid}>Login</button>
                </div>
            </div>
        </form>
    </div>
}
export default LoginForm


