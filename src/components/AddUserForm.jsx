import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    //En react-hook-form version 7xxx hay que utilizar asi:
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label>Name</label>
                <input 
                    type="text" 
                    //En react-hook-form version 7xxx hay que utilizar asi:
                    {...register("name", {required: {value: true, message: 'Campo obligatorio'}})}
                />
            <div>
                {errors?.name?.message}
            </div>
            
            <label>Username</label>
                <input 
                    type="text" 
                    {...register("username", {required: {value: true, message: 'Campo obligatorio'}})}
                />
            <div>
                {errors?.username?.message}
            </div>
            <button type="submit">Add new user</button>
        </form>
    );
}
 
export default AddUserForm;

 