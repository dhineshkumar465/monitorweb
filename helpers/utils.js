import upload from '../assets/icons/upload.png';
import pause from '../assets/icons/pause.png';
import download from '../assets/icons/download.png'

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