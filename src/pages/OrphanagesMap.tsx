import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
            </Map>
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;