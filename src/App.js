import React  from "react";
import './App.css';
import { Rnd } from "react-rnd";


import Button from "@mui/material/Button";

function App() {
    let [w,setW ]= React.useState(300 )
    let [h,setH] =React.useState(450)
    let myRef =React.createRef()

    let play = (width,height) =>{
        let v = document.getElementById("video1");
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext('2d');
        v.play()//需求只说了 播放
        //每10毫秒画一次图
        v.addEventListener('play', function() {
            let i = window.setInterval(function() {
                ctx.drawImage(v, 1, 1, width, height);
                if(v.ended){
                    clearInterval(i)
                }
            }, 10);
        }, false);
    }

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
                     setH(ref.offsetHeight)
                     setW(ref.offsetWidth)
                     play(ref.offsetWidth,ref.offsetHeight)
                 }}
            >  <div >
                <MyCanvas ref={myRef} w={w} h={h} className='fcan'>
                </MyCanvas>
            </div>
            </Rnd>




        </div>
    );
}


function MyCanvas(props) {

    let play = (width,height) =>{
        width=props.w;
        height=props.h;
        let v = document.getElementById("video1");
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext('2d');
        v.play()//需求只说了 播放
        //每10毫秒画一次图
        v.addEventListener('play', function() {
            let i = window.setInterval(function() {
                ctx.drawImage(v, 1, 1, width, height);
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
            <canvas width='800'  height='600'    id='myCanvas'>
            </canvas>
            <br></br>
            <Button onClick={play}>
                play
            </Button>

        </div>
    );
}




export default App;