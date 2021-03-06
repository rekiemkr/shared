// padding = 'padTop padRight padBottom padLeft' || "12px 18px 10px 12px" 
// percentage = number(1,100) || default(100)
// borderRadius = 0 default(5px)
// barColor = default(#327B79)
// backgroundColor = default(#fff)
// styleContainer = {}

import React, { useState, useEffect } from 'react'
import anime from "../Animations/anime"

export default function ProgressBar(props) {
    const [percentage, setPercentage] = useState(0)
    const id = props.id || "bar"
    useEffect(() => {
        if(id==='volNemesisGameboard15') console.log('id--->',id,'percentage-->',props.percentage)
        setPercentage(props.percentage); 
    }, [props.percentage])
    useEffect(()=>{
        if(id==='volNemesisGameboard15')console.log(id,'% ANIME-->', percentage)
        document.getElementById("progress_"+id).style.width=(percentage || 0) + "%"
        /* anime({
            targets: "#progress_"+id,
            width: (percentage || 0) + "%",
            duration: 3000,
            easing: "easeOutSine",
            delay:500
        })    */
    }, [percentage])

    const styleBar = {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        padding: props.padding || '0 0 0 0',
        boxSizing: 'border-box',
        zIndex:'1',
        
    }
    const styleProgress = {
        height: '100%',
        width: "0%",
        backgroundColor: props.barColor || '#327B79',
        borderRadius: props.borderRadius || '5px',
        ...props.styleProgress
    }
    return (
        <div style={{ display: 'inline-block', position:'relative', ...props.styleContainer}}>
            <div className={props.debug ? 'testBox ProgressBar' : 'ProgressBar'} style={{ display: 'inline-block', position: 'relative', zIndex: '2' }}>
                <img src={props.image ? props.image : ''} alt="Progress Bar" style={{ width: '100%', display: props.image ? 'block' : 'none' }}></img>
            </div>
            <div className={props.debug ? 'testBox' : ''} style={styleBar}>
                <div className={props.debug ? 'testBox' : ''} style={{ width: '100%', height: '100%', background: props.background || '',backgroundColor: props.backgroundColor || '', borderRadius: props.borderRadius || '5px',...props.border }}>
                    <div id={"progress_"+id} className={props.debug ? 'testBox' : ''} style={styleProgress}>
                    </div>
                </div>
            </div>
        </div>

    )
}
