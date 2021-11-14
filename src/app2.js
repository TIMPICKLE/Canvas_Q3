import React, {useEffect} from "react";
import './App.css';
import { Rnd } from "react-rnd";


import Button from "@mui/material/Button";

function App() {
    const [w,setW ]= React.useState(300 )
    const [h,setH] =React.useState(450)


    return (
        <div className="App" id='app'>

            <Rnd className='drag'
                 default={{
                     x: 150,
                     y: 205,
                     width: {w},
                     height: {h},
                     scale: 3,
                 }}
                 minWidth={365}
                 minHeight={212}
                 bounds="window"
                 onResizeStop={(e, direction, ref, delta, position) => {
                     // this.setState({
                     //     h: ref.offsetHeight,
                     //     w: ref.offsetWidth
                     // });
                     setH(ref.offsetHeight)
                     setW(ref.offsetWidth)

                 }}
            >
                <MyCanvas w={w} h={h} className='fcan'>
                </MyCanvas>

            </Rnd>
        </div>
    );
}


function MyCanvas(props) {
    var www = props.w
    var hhh = props.h
    console.log(www)
    let play = (width,height) =>{
        let v = document.getElementById("video1");
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext('2d');
        v.play()//需求只说了 播放
        //每10毫秒画一次图
        v.addEventListener('play', function() {
            let i = window.setInterval(function() {
                ctx.drawImage(v, 1, 1, www, hhh);
                if(v.ended){
                    clearInterval(i)
                }
            }, 10);
        }, false);
    }

    return(
        <div className='son' width={props.w} height={props.h}>
            <video style={{display: 'none'}}   crossOrigin="anonymous" id='video1'
                   src="https://mdn.github.io/dom-examples/canvas/chroma-keying/media/video.mp4"></video>
            <canvas style={{width: props.w, height: props.h}}    id='myCanvas'>
            </canvas>
            <br></br>
            <Button onClick={play}>
                play
            </Button>

        </div>
    );
}




export default MyCanvas;