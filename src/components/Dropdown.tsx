import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
} from '@chakra-ui/react'
import { FC } from 'react'

import { auth } from '@/firebase/config'
import { useNavigate } from 'react-router-dom';

type UserData = {
    name: string;
    photoUrl: string;
    email: string;
}

export const Dropdown: FC = () => {
    const user = localStorage.getItem("user");
    const userData: UserData = JSON.parse(user!);
    const navigate = useNavigate();
    return (
        <div className='z-100'>
            <Menu>
                <MenuButton>
                    <Image sx={{ borderRadius: "50%" }} src={userData.photoUrl} style={{ width: "40%", objectFit: "cover" }} alt="" />
                </MenuButton>
                <MenuList zIndex={100}>
                    <MenuItem fontWeight="bold">{userData.name}</MenuItem>
                    <MenuItem fontWeight="bold" wordBreak={'break-word'}>{userData.email}</MenuItem>
                    <MenuItem fontWeight="bold" color={"red"} onClick={() => {
                        auth.signOut();
                        localStorage.clear();
                        navigate("/login")
                    }
                    }>Logout</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}