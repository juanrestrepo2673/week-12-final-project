
import { muscleName } from '@/types/muscleName';
import { Abs, Back, Biceps, Cardio, Glutes, Pectorals, Quads, Triceps } from '../Exercises/Icons/Icons';
import './MuscleBadge.css'

const icons = {
  ['abs']: Abs,
  ['back']: Back,
  ['biceps']: Biceps,
  ['cardio']: Cardio,
  ['glutes']: Glutes,
  ['pectorals']: Pectorals,
  ['quads']: Quads,
  ['triceps']: Triceps
}

const getIcon = (iconName: muscleName) => icons[iconName] || null

interface MuscleBadgeProps {
  muscleName: muscleName | string
}

export default function MuscleBadge({ muscleName }: MuscleBadgeProps) {
  const Icon = getIcon(muscleName)
  if (!Icon) return null
  return (
    <div className='muscleBadge'>
      <div className='svgContainer'>
        <Icon />
      </div>
      <span>( {muscleName} )</span>
    </div>
  )
}
