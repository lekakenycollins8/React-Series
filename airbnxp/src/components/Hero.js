import React from 'react';
import photo_grid from './images/photo_grid.png';

export default function Hero() {
    return (
        <section className="container-fluid mx-auto p-2">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={photo_grid} alt="hero" style={{ width: '80%', height: '80%' }} />
            </div><br></br><br></br>
            <h1>Introducing Online Experiences</h1>
            <p>Unique activities we can do together, led by a world of hosts. A home without leaving home</p>
        </section>
    );
}