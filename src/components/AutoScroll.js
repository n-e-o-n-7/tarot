import { Fragment, cloneElement } from "react"

export default function AutoScroll({data,reverse=false,offsetX=0,children}){
    console.log(data)

    return (
			<Fragment>
				<style jsx>{`
					@keyframes scroll {
						0% {
							transform: translateX(0%);
						}
						100% {
							transform: translateX(-50%);
						}
					}
					@keyframes scroll-reverse {
						0% {
							transform: translateX(-50%);
						}
						100% {
							transform: translateX(0%);
						}
					}

					
      	`}</style>
				<div className="overflow-x-scroll">
					<div className="flex w-max relative"style={{animation: `${reverse?'scroll':'scroll-reverse'} 30s linear infinite` , left:`${offsetX}px`}}>      
						{[...data,...data].map((item,idx) => {
								return cloneElement(children,{key:idx,src:item.src,alt:item.title})
						})}
					</div>
				</div>
			</Fragment>
    )
}