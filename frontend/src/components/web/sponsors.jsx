import React from "react";

const Sponsors = () => {
    const images = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    ];

    return (
        <div className="flex flex-col items-center mt-8 mb-8">
            <h1 className="text-xl font-bold mb-8">Título del Contenedor</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div key={index} class="flex justify-center items-center" >
                        <img style={{ maxWidth: "200px", maxHeight: "200px" }} className="h-auto max-w-full rounded-lg" src={image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
