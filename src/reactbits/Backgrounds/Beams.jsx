import Threads from './Threads'

export function BeamsBackground({ ...props }) {
  // Convert hex colors to RGB normalized (0-1)
  // muted-blue: #4A6FA5 = rgb(74, 111, 165) = (74/255, 111/255, 165/255)
  // muted-purple: #6B5B95 = rgb(107, 91, 149) = (107/255, 91/255, 149/255)
  // Use a brighter blend for visibility
  const color = [0.4, 0.45, 0.65] // Brighter blend of muted blue and purple
  
  return (
    <Threads
      color={color}
      amplitude={1.2}
      distance={0.15}
      enableMouseInteraction={false}
      {...props}
    />
  )
}

