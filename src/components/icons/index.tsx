//import type {SiSimpleicons} from '@icons-pack/react-simple-icons';
import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { Linkedin } from 'lucide-react';
import Image from "next/image";

export const Icons1 = {
    facebook: <Image src="/facebook.svg" alt="facebook" width={24} height={24}/>,
    instagram: <Image src="/instagram.png" alt="instagram" width={24} height={24}/>,
    linkedin: <Image src="/linkedin.svg" alt="linkedin" width={24} height={24}/>,
    youtube: <Image src="/youtube.png" alt="youtube" width={24} height={24}/>,

    facebookSm: <Image src="/facebook.svg" alt="facebook" width={18} height={18}/>,
    instagramSm: <Image src="/instagram.png" alt="instagram" width={18} height={18}/>,
    linkedinSm: <Image src="/linkedin.svg" alt="linkedin" width={18} height={18}/>,
    youtubeSm: <Image src="/youtube.png" alt="youtube" width={18} height={18}/>
}

export const Icons = {
    facebook: SiFacebook,
    instagram: SiInstagram,
    linkedin: Linkedin,
    youtube: SiYoutube,
}