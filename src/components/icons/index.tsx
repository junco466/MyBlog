//import type {SiSimpleicons} from '@icons-pack/react-simple-icons';
import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { Linkedin } from 'lucide-react';
import Image from "next/image";


export const Icons1 = {
    facebook: <Image src="/facebook.png" alt="facebook" width={24} height={24}/>,
    instagram: <Image src="/instagram.png" alt="instagram" width={24} height={24}/>,
    linkedin: Linkedin,
    youtube: <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
}

export const Icons2 = {
    facebook: SiFacebook,
    instagram: SiInstagram,
    linkedin: Linkedin,
    youtube: SiYoutube,
}

