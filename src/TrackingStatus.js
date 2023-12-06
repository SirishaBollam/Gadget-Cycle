import { useState } from 'react';
import './TrackingStatus.css';

function TrackingStatus({ status_number, width, margin_top, margin_left, updateStatusNo }) {
    return (
        <div className='tracking-status-div' style={{ width: width, marginTop: margin_top, marginLeft: margin_left }}>
            <div className='tracking-status-row'>
                <div className='blue-circle'></div>
                <div className='tracking-status-row-para-div'>
                    <p>Initial</p>
                </div>
            </div>

            {status_number > 1 ? (
                <div className='blue-line-sep'></div>
            ) : (
                <div className='line-sep'></div>
            )}

            <div className='tracking-status-row'>
                {status_number >= 2 ? (
                    <div className='blue-circle'></div>
                ) : (
                    <div className='circle' onClick={() => {updateStatusNo(2)}}></div>
                )}
                <div className='tracking-status-row-para-div'>
                    <p>Carrier picked up the package</p>
                </div>
            </div>

            {status_number > 2 ? (
                <div className='blue-line-sep'></div>
            ) : (
                <div className='line-sep'></div>
            )}

            <div className='tracking-status-row'>
                {status_number >= 3 ? (
                    <div className='blue-circle'></div>
                ) : (
                    <div className='circle' onClick={() => {updateStatusNo(3)}}></div>
                )}
                <div className='tracking-status-row-para-div'>
                    <p>Package Received</p>
                </div>
            </div>

            {status_number > 3 ? (
                <div className='blue-line-sep'></div>
            ) : (
                <div className='line-sep'></div>
            )}

            <div className='tracking-status-row'>
                {status_number >= 4 ? (
                    <div className='blue-circle'></div>
                ) : (
                    <div className='circle' onClick={() => {updateStatusNo(4)}}></div>
                )}
                <div className='tracking-status-row-para-div'>
                    <p>Gadget Verification</p>
                </div>
            </div>

            {status_number > 4 ? (
                <div className='blue-line-sep'></div>
            ) : (
                <div className='line-sep'></div>
            )}

            <div className='tracking-status-row'>
                {status_number >= 5 ? (
                    <div className='blue-circle'></div>
                ) : (
                    <div className='circle' onClick={() => {updateStatusNo(5)}}></div>
                )}
                <div className='tracking-status-row-para-div'>
                    <p>Gadget Verification</p>
                </div>
            </div>

            {status_number > 5 ? (
                <div className='blue-line-sep'></div>
            ) : (
                <div className='line-sep'></div>
            )}

            <div className='tracking-status-row'>
                {status_number >= 6 ? (
                    <div className='blue-circle'></div>
                ) : (
                    <div className='circle' onClick={() => {updateStatusNo(6)}}></div>
                )}
                <div className='tracking-status-row-para-div'>
                    <p>Donated</p>
                </div>
            </div>
        </div>
    );
}

export default TrackingStatus;
