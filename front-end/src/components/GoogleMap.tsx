import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

interface GoogleMapProps {
  center: { lat: number; lng: number };  
  zoom?: number;
  apiKey: string; 
}

function GoogleMap({ center, zoom =10, apiKey}: GoogleMapProps) {
  const mapId = 'c67c8384487b0f05b8f3cde1'; 


  return (
    <div style={{ borderRadius: '20px', overflow: 'hidden', height: '200px', width: '400px' }}>
      <APIProvider apiKey={apiKey} region="BR" language="pt-BR">
        <Map
          defaultCenter={center}
          defaultZoom={zoom}
          mapId={mapId}                
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          <AdvancedMarker position={center}>
            <Pin
              background={'#db4437'}   
              glyphColor={'#ffffff'}
              borderColor={'#000000'}
            />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}

export default GoogleMap;