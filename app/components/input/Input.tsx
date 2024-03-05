"use client"

import { FieldValues,UseFormRegister } from 'react-hook-form'

import React from 'react'


type InputProps ={
    id: string
    label: string
    type?: string
    disabled?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: any
    placeholder: string
    className: string
}

//　入力フォーム
const Input:React.FC<InputProps> = ({
    id,
    label,
    type='text',
    disabled,
    required,
    register,
    errors,
}) => {
  return (
    <div className=' relative w-full'>
        <div className=' mb-2 font-bold'>
            {label}
        </div>
            <Input 
                id={id}
                label=''
                disabled={disabled}
                {...register(id, { required})}
                placeholder=""
                type={type}
                register={register}
                errors={errors}
                className={`w-full rounded-lg border-2 p-4 outline-none transition disabled:cursor-not-allowed disabled:opacity-70
                    ${
                        errors[id]
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-300 focus:border-sky-500'
                    }
                `}
            />

            {errors[id] && (
                <div className=' my-3 text-center text-sm text-red-500'>{errors[id].message}</div>
            )}        

    </div>
  )
}

export default Input