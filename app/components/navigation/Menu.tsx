"use client"

import useLoginModal from '@/app/hooks/useLoginModal'
import useProfileModal from '@/app/hooks/useProfileModal'
import useSignupModal from '@/app/hooks/useSignupModal'
import { User } from '@prisma/client'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import { signOut } from 'next-auth/react'
// import MenuItem from './MenuItem'


type MenuProps = {
    currentUser: User | null
}


//　メニュー
const Menu:React.FC<MenuProps> = ({currentUser}) => {

    const [isOpen, setIsOpen] = useState(false);
    const loadingModal = useLoginModal()
    const signupModal = useSignupModal()
    const profileMOdal = useProfileModal()

    //　メニューオープン
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)  
    },[])

  return (
    <div className=' relative'>
        <div className=' relative h-10 w-10 cursor-pointer' onClick={toggleOpen}>
            <Image src={ currentUser?.image || '/default.jpeg'} alt="avatar" fill className=' rounded-full object-cover'  />
        </div>

        {isOpen && (
            <div className=' absolute right-0 z-10 w-40 overflow-hidden rounded-lg bg-white text-sm text-black shadow-lg shadow-gray-100'>
                <div className=' cursor-pointer'>
                    {currentUser ? (
                        <>
                            <MenuItem 
                                label='プロフィール'
                                onClick={() => {
                                    profileMOdal.onOpen()
                                    setIsOpen(false)
                                }}
                            />
                            <MenuItem
                                label='ログアウト'
                                onClick={() => {
                                    signOut()
                                    setIsOpen(false)
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <MenuItem
                                label='ログイン'
                                onClick={() => {
                                    loadingModal.onOpen()
                                    setIsOpen(false)
                                }}
                            />
                            <MenuItem
                                label='サインアップ'
                                onClick={() => {
                                    signupModal.onOpen()
                                    setIsOpen(false)
                                }}
                            />
                        </>
                    )}

                </div>
            </div>
        )}

    </div>
  )
}

export default Menu