import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DnsIcon from '@mui/icons-material/Dns';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const mainNavbarItems = [
    {
        id: 0,
        icon: 'ArrowDropDownIcon',
        label: 'Programming',
        route: 'programming',
        children: [
            {
                id: 5,
                icon: "<AllInclusiveIcon />",
                label: 'Javascript',
                route: 'javascript'
            },
            {
                id: 6,
                icon: "<PeopleIcon />",
                label: 'React',
                route: 'react'
            },
            {
                id: 7,
                icon: "<PeopleIcon />",
                label: 'Mobile React',
                route: 'mobileReact'
            },
            {
                id: 8,
                icon: "<PeopleIcon />",
                label: 'Redux',
                route: 'redux'
            },
            {
                id: 9,
                icon:" <PeopleIcon />",
                label: 'Route V6',
                route: 'routeV6',
            },
        ],
    },
    {
        id: 2,
        icon: "<ImageIcon />",
        label: 'Networking',
        route: 'networking',
    },
    {
        id: 3,
        icon: "<PublicIcon />",
        label: 'LinkedIn Profile',
        route: 'linkedInProfile',

    },
    {
        id: 4,
        icon: "<SettingsEthernetIcon />",
        label: 'Mock Interviews',
        route: 'mockInterviews',
    },
]