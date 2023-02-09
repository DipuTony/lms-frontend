import React from 'react'
import ReactPlayer from 'react-player/lazy'
import YouTube from 'react-youtube';

const VideoPlayer = () => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            frameborder: 0,
            controls: 1, //Contrros
            disablekb: 1, // Keyboard           
            rel: 0,     //Relevent Video

            modestbranding: 1, rel: 0, showinfo: 0
        },
    };

    return (
        <>
            <div> This is player </div>
            <div className='grid grid-cols-12 space-x-10'>
                <div className='col-span-9'>
                    <div className='w-full h-screen border'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            controls={true}
                            pip={false}
                            className="player"
                            width="100%"
                            // height="100%"
                            playing={true}
                            onContextMenu={(e) => e.preventDefault()}
                            config={{
                                youtube: {
                                    playerVars: { showinfo: false },
                                    modestBranding: false,
                                    showInfo: false,
                                },
                                facebook: {
                                    appId: '12345'
                                }
                            }}
                        />


                        <YouTube videoId="2g811Eo7K8U" opts={opts} />;

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ysz5S6PUM-U?modestbranding=1&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='border p-5'>
                        Playlist Titile

                        <p>Propgress Autoplay</p>

                        <div className='bg-gray-200'>
                            Video 1
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default VideoPlayer
