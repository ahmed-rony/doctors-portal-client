import { HiOutlineClock } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Fluoride from "./assets/images/fluoride.png";
import Cavity from "./assets/images/cavity.png";
import Whitening from "./assets/images/whitening.png";

export const infoData = [
    {
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor sit amet consectetur',
        icon: <HiOutlineClock />,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10036, United States',
        icon: <FaMapMarkerAlt />,
        background: 'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+2347938573475',
        icon: <BsTelephoneFill />,
        background: 'primary'
    }
];

export const serviceData = [
    {
        name: 'Flouride Treatmnt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at perspiciatis quia consequuntur officia eligendi',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at perspiciatis quia consequuntur officia eligendi',
        img: Cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at perspiciatis quia consequuntur officia eligendi',
        img: Whitening
    }
]

export const appointmentData = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        startTime: '8:00 AM',
        endTime: '9:00 AM',
        space: '10'
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        startTime: '8:00 AM',
        endTime: '9:00 AM',
        space: '10'
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        startTime: '8:00 AM',
        endTime: '9:00 AM',
        space: '10'
    },
    {
        id: 4,
        name: 'Cavity Protection',
        startTime: '8:00 AM',
        endTime: '9:00 AM',
        space: '10'
    },
    {
        id: 5,
        name: 'Mouth Wash',
        startTime: '8:00 AM',
        endTime: '9:00 AM',
        space: '10'
    },
    {
        id: 6,
        name: 'Jerms Orthodontics',
        startTime: '7:00 PM',
        endTime: '7:40 PM',
        space: '8'
    },
]
export const timeSlots = [
    { time: '9:00 A.M - 9:45 A.M'},
    { time: '10:00 A.M - 10:45 A.M'},
    { time: '11:00 A.M - 11:45 A.M'},
    { time: '12:00 P.M - 12:45 P.M'},
    { time: '12:00 P.M - 1:45 P.M'},
    
]