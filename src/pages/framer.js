import {useAnimationControls,motion} from 'framer-motion'
import {useState} from 'react'
const btnStyle = {
    color:'white',
    fontFamily:'system-ui',
    backgroundColor:'black',
    padding:10,
    paddingLeft:32,
    paddingRight:32,
    letterSpacing:1,
    borderRadius:20,
    cursor:'pointer',
    whiteSpace:'nowrap'
  }
export default function Framer(){
    const controller = useAnimationControls()
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
              gap:52,
          }}>
          <motion.div
          style={{
            width:100,
            height:100,
            backgroundColor:'black',
            borderRadius:'20px'
          }}
         animate={controller}
          
          >
        </motion.div>
          <div style={{
              display:'flex',
                gap:20
            }}>
            <motion.div
              style={btnStyle}
              onTap={async ()=>{
                await controller.start({scale:1.2})
                await controller.start({scale:1})
              }}
              >大</motion.div>
            <motion.div
              style={btnStyle}
              onTap={()=>{
                controller.start({rotate:45})
              }}
              >旋转</motion.div>
            <motion.div
              style={btnStyle}
              onTap={()=>{
                controller.start({opacity:0.2})
              }}
              >透明度</motion.div>
            <motion.div
              style={btnStyle}
              onTap={()=>{
                controller.start({opacity:1,rotate:0,scale:1.0})
              }}
              >还原</motion.div>
            
          </div>
          
          
        </div>
    
      )
    }
    