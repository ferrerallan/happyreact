import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';


const mapIcon = Leaflet.icon({
    iconUrl : mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]
});

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Marília</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map center={[-22.2385389,-49.9059505]}
                     zoom={15}
                     style={{width:'100%', height:'100%'}}
                >
                    {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                    <TileLayer url= {`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                    <Marker position={[-22.2385389,-49.9059505]}
                            icon={mapIcon}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                            Lar doce lar
                            <Link to="/orphanages/1">
                                <FiArrowRight size={20} color="FFF"/>
                            </Link>
                        </Popup>
                    </Marker>
            </Map>
            

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;