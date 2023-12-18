import Image from 'next/image'
import localFont from 'next/font/local'
import AutoScroll from '@/components/AutoScroll'
const papyrus = localFont({ src: './Papyrus Std Regular.otf' })

export default function Home() {
  const data1 = [ 
    {"title": "倒吊人", "src": "/倒吊人.jpg"},
    {"title": "恶魔", "src": "/恶魔.jpg"},
    {"title": "高塔", "src": "/高塔.jpg"},
    {"title": "皇帝", "src": "/皇帝.jpg"},
    {"title": "教皇", "src": "/教皇.jpg"},
    {"title": "节制", "src": "/节制.jpg"},
    {"title": "力量", "src": "/力量.jpg"},
    {"title": "恋人", "src": "/恋人.jpg"},
    {"title": "命运之轮", "src": "/命运之轮.jpg"},
    {"title": "魔术师", "src": "/魔术师.jpg"},
    {"title": "女皇", "src": "/女皇.jpg"},
  ]

  const data2 = [
    {"title": "女祭司", "src": "/女祭司.jpg"},
  {"title": "权杖八", "src": "/权杖八.jpg"},
  {"title": "权杖二", "src": "/权杖二.jpg"},
  {"title": "权杖国王", "src": "/权杖国王.jpg"},
  {"title": "权杖九", "src": "/权杖九.jpg"},
  {"title": "权杖六", "src": "/权杖六.jpg"},
  {"title": "权杖女王", "src": "/权杖女王.jpg"},
  {"title": "权杖七", "src": "/权杖七.jpg"},
  {"title": "权杖骑士", "src": "/权杖骑士.jpg"},
  ]

  const data3 = [
    {"title": "世界", "src": "/世界.jpg"},
    {"title": "死神", "src": "/死神.jpg"},
    {"title": "太阳", "src": "/太阳.jpg"},
    {"title": "星币八", "src": "/星币八.jpg"},
    {"title": "星币二", "src": "/星币二.jpg"},
    {"title": "星币国王", "src": "/星币国王.jpg"},
    {"title": "星币九", "src": "/星币九.jpg"},
    {"title": "星币六", "src": "/星币六.jpg"},
    {"title": "星币女王", "src": "/星币女王.jpg"},
    {"title": "星币七", "src": "/星币七.jpg"},
    {"title": "星币骑士", "src": "/星币骑士.jpg"},
  ]
  
  return (
    <div className='relative w-screen h-screen py-8'>
    <div className='flex flex-col'>
      <AutoScroll data={data1}>
        <Image

          width={0}
          height={0}
          sizes="19vh"
          priority
  
          style={{ width: '100%', height: 'auto' }} 
        />
       
      </AutoScroll>
      <AutoScroll data={data2} reverse={true} >
      <Image

        width={0}
        height={0}
        sizes="17vh"
        style={{ width: '100%', height: 'auto' }} 
        priority
      />
     
    </AutoScroll>
    <AutoScroll data={data3} offsetX={100}>
      
      <Image

        width={0}
        height={0}
        sizes="19vh"
        style={{ width: '100%', height: 'auto' }} 
        priority
      />
     
    </AutoScroll>
    </div>
    <div className='absolute inset-0'>
      <div className='absolute left-0 top-0 bottom-0 bg-gradient-linear w-[800px] rotate-180'></div>
      <div className='absolute right-0 top-0 bottom-0 bg-gradient-linear w-[800px]'></div > 
    </div>
    <div className='absolute inset-0 backdrop-blur-[2px] bg-white/30'>
      <div>

      </div>
    </div>
    <div className='absolute inset-0 bg-gradient-radial  flex'><span className={`m-auto text-8xl ${papyrus.className}`}>TAROT</span> </div>
    </div>
  )
}
