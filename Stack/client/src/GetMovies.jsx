import React, { useState } from "react";

function GetMovies() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value.trim();
        if (!query) return;
        
        try {
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
            const data = await res.json();
            const imageUrls = data
                .map(result => result.show.image?.medium)
                .filter(url => url);
            setImages(imageUrls);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
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
            <form onSubmit={handleSubmit} className="search-form">
                <center>
                <input type="text" name="query" placeholder="Search for movies..." />
                <button type="submit">Search</button>
                </center>
            </form>
            <div className="image-container">
                {images.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Movie ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default GetMovies;
