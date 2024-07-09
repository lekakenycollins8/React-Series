import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
    return (
        <div>
            <Navbar /><br></br>
            <Hero />
            <Card />
        </div>
    );
}