import { useEffect, useState } from 'react'

export interface HelloworldProps {
  message: string
}

const Helloworld: React.FC<HelloworldProps> = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect')
    const update = (e: MouseEvent) => {
      console.log('inner')
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', update)

    return () => {
      console.log('cancel')
      document.removeEventListener('click', update)
    }
  })
  console.log('render')
  return (
    <div>
      x:{position.x},y:{position.y}
    </div>
  )
}
export default Helloworld
