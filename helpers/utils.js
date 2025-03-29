import upload from '../assets/icons/upload.png';
import pause from '../assets/icons/pause.png';
import download from '../assets/icons/download.png';
import cursor from '../assets/icons/cursor.png';
import circleFrame from '../assets/icons/circleFrame.png';

export const getColor = (val) => {
    if(val) {
        return '#5A00D1';
    } else {
        return '#fff';
    }
}

export const listData = [
    {
        text: 'YouTube is up',
        period: '1 month ago',
        status: 'upload'
    },
    {
        text: 'YouTube has started',
        period: '2 Seconds ago',
        status: 'pause'
    }
];

export const monitorData = [
    {
        text: 'Started',
        period: '2 Seconds ago',
        status: 'pause'
    }
];

export const getStatusImg = (status) => {
    if(status === 'upload') {
        return upload;
    } else if(status === 'pause') {
        return pause;
    } else {
        return download;
    }
}

export const layoutData = [
    {
        text: 'HTTPs 443',
        image: cursor
    },
    {
        text: 'https://www.youtube.com',
        image: circleFrame
    }
]