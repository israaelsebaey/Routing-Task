import React, { Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons';
import { userLogin } from '../Redux/reducers/UserReducer';
import { useNavigate ,NavLink} from 'react-router-dom';
import '../css/Form.css';

const Login = () => {
    const {register,handleSubmit,formState:{errors},reset}=useForm()
    const {users}=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const onSubmit=(data)=>{
       let flag=false;
       for(let i=0;i<users.length;i++){
         if(users[i].name===data.name && users[i].password===data.password){
            dispatch(userLogin(data));
            reset();
            alert('Login Success');
            flag=true;
            setTimeout(()=>navigate('/'),2000)
            break;
         }
       }
       if(!flag){
         alert('Wrong username or password');
       }    
    }
  return (
    <Fragment>
        <div className='container form shadow-lg'>
            <div className='row'>
                <div className='col-6 d-lg-block d-none position-relative'>
                   <img src='images/wave.png' className='waveImg'/>
                   <img src='images/bg.svg' className='bgImg position-absolute'/>
                </div>
                <div className='col-lg-6 col-12 my-auto'>
                    <form className='formContent mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div className='avatar mb-3'>
                            <img src='images/avatar.svg' className='avatarImg'/>
                            <h2 className='my-3'>WELCOME</h2>
                        </div>
                        <div className="input-data mb-3">
                            <div className='input-group'>
                                <span class="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input type="text" className="form-control" placeholder='Username'
                                autoComplete='off' name='name' 
                                {...register('name',{required:'name is required'})}
                                />
                            </div>
                            <div className='errors text-start mt-2'>
                              <p>{errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}</p>
                            </div>
                        </div>
                        <div class="input-data mb-3">
                            <div className='input-group'>
                                <span class="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon={faKey} />
                                </span>
                                <input type="password" class="form-control" placeholder="Password"
                                name='password' 
                                {...register('password',{required:'password is required'})}
                                />
                            </div>
                            <div className='errors text-start mt-2'>
                              <p>{errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}</p>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className='mt-3'>
                        <span >don't have account?<NavLink to='/signup' className='form-link'>Signup</NavLink></span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
export default Login;