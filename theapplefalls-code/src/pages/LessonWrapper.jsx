import React from 'react';
import Navbar from '../components/Navbar';

const LessonWrapper = ({ src }) => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0a0a0a', paddingTop: '70px' }}>
            <Navbar />
            <div style={{ flex: 1, position: 'relative' }}>
                <iframe
                    src={src}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block'
                    }}
                    title="Lesson"
                />
            </div>
        </div>
    );
};

export default LessonWrapper;
