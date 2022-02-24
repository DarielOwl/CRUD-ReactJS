import React from 'react'
import { useForm } from 'react-hook-form'

const EditMe = (props) => {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        console.log(data)
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label>Name</label>
            <input 
                type="text" 
                {...register("name", {required: {value: true, message: 'Valor Requerido'}})}
            />
            <div>
                {errors?.name?.message}
            </div>

            <label>Username</label>
            <input 
                type="text" 
                {...register("username", {required: {value: true, message: 'Valor Requerido'}})}
                />
            <div>
                {errors?.username?.message}
            </div>

            <button type="submit">Edit user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
}
 
export default EditMe;