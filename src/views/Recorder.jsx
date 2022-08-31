import { useState, useEffect, useRef } from 'react'

import { ReactMediaRecorder } from 'react-media-recorder'

export const Recorder = () => {
    const [video, setVideo] = useState()
    const [rec, setRec] = useState(false)
    const saveVideo = async (mediaBlobUrl) => {
        const mediaBlob = await fetch(mediaBlobUrl).then((response) =>
            response.blob()
        )
        const myFile = new File([mediaBlob], 'demo.mp4', { type: 'video/mp4' })
        console.log(myFile)
    }

    const save = async (pol) => {
        var file = new Blob([pol], { type: "video/mp4'" })
        /*var value = URL.createObjectURL(file);
        console.log(file)
        localStorage.setItem('grabadazo',value.arrayBuffer())
        setVideo(value)*/

        const buf = await file.arrayBuffer()

        var value = URL.createObjectURL(new Blob([buf]))
        console.log(value)
    }
    console.log(video)
    return (
        <div>
            <ReactMediaRecorder
                video
                blobPropertyBag={{ type: 'video/mp4' }}
                render={({
                    status,
                    startRecording,
                    stopRecording,
                    mediaBlobUrl,
                    
                }) => (
                    <div
                        style={{
                            display: 'flex',
                            marginBottom: '20px',
                            justifyContent: 'space-around',
                            height:'50vh',
                            alignContent:'center'
                        }}
                    >
                        <p>
                            Estado de la grabacion <strong>{status}</strong>{' '}
                        </p>
                        
                        <div style={{position:'relative',width:'40%',
                    display:'flex',justifyContent:'center',alignContent:'center'}}>
                        <video
                            src={mediaBlobUrl}
                            controls
                            autoPlay
                            width={'100%'}
                            height={'100%'}
                            style={{position:'absolute'}}
                        />{status=='recording' ?( <div className='red' style={{width:'30px', height:'30px',borderRadius:'100%',backgroundColor:'red',position:'absolute',right:'0'}}></div>):(null)}
                       
                        </div>
                       
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <button onClick={startRecording}>
                                Comenzar a grabar
                            </button>
                            <button onClick={stopRecording}>
                                Terminar de grabar
                            </button>
                           {/*<button onClick={save}>SAVE</button> */} 
                        </div>
                    </div>
                )}
            />
        </div>
    )
}
