import React from 'react';

function App() {
    const backgroundImageUrl = 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg';
    const lightShadeOpacity = 0.5; // Adjust opacity as needed

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, ${lightShadeOpacity}), rgba(255, 255, 255, ${lightShadeOpacity})), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={backgroundStyle}>
            {/* Your content here */}
            <button><a href="/login">Login to Watch movies</a></button>

        </div>

    );
}

export default App;
