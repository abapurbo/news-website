import React from "react";
import '../../Styles/global.css'

export default function FeaturedNews() {
    return (
        <div className="featured-container">
            {/* Section Title */}
            <h1 className="news-title">
                Latest News
                <span
                    style={{
                        display: "block",
                        height: "4px",
                        width: "80px",
                        margin: "8px auto 0",
                        borderRadius: "2px",
                        background: "linear-gradient(to right, #ff4d4d, #ff9900)",
                    }}
                ></span>
            </h1>
            {/* Subtitle */}
            <p
                className="news-sub-title" >
                Stay updated with the latest headlines and stories from around the world.
            </p>

            {/* featured news card section */}
            <div>

            </div>
        </div>
    );
}
