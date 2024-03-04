"use client"

import useLoginModal from '@/app/hooks/useLoginModal'
import useProfileModal from '@/app/hooks/useProfileModal'
import useSignupModal from '@/app/hooks/useSignupModal'
import { User } from '@prisma/client'
import React, { useCallback, useState } from 'react'


type MenuProps = {
    currentUser: User | null
}


//　メニュー
const Menu:React.FC<MenuProps> = ({currentUser}) => {

    const [isOpen, SetIsOpen] = useState(false);
    const loadingModal = useLoginModal()
    const signupModal = useSignupModal()
    const profileMOdal = useProfileModal()

    //　メニューオープン
    const toggleOpen = useCallback(() => {
        SetIsOpen((value) => !value)  
    },[])

  return (
    <div></div>
  )
}

export default Menu