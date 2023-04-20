// MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { useFrames } from '../../hooks/useFrames';

const MapComponent = () => {
    const { data, error, loading } = useFrames();
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos: {error.message}</p>;

    const habs = {};

    data.data.forEach(({ attributes }) => {
        const { hid, pos } = attributes.frame.hab;
        if (!habs[hid]) {
            habs[hid] = [];
        }
        habs[hid].push([pos.lat, pos.lon]);
    });

    const defaultCenter = habs[Object.keys(habs)[0]][0];
    const polylines = Object.keys(habs).map((hid, index) => (
        <Polyline
            key={hid}
            positions={habs[hid]}
            color={colors[index % colors.length]}
        />
    ));

    return (
        <MapContainer key={Math.random()} zoomControl={false} className="mainmap" center={[41.390205, 2.154007]} zoom={3} scrollWheelZoom={true}
            style={{ height: '70vh', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {polylines}
        </MapContainer>
    );
};



export default MapComponent;
