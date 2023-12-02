

import { ReactNode } from 'react'
import { exercise } from '@/types/exercise'
import './Exercises.css'
import MuscleBadge from '../MuscleBadge/MuscleBadge';
import { Equipment } from './Icons/Icons';

interface ExercisesProps {
  exercises: exercise[];
  children: ReactNode
}

export default function Exercises({ exercises, children }: ExercisesProps) {

  return (
    <aside className='exercises'>
      <h2>Exercises</h2>
      {children}
      <p>{exercises.length} results for: </p>

      <ul>
        {
          exercises.map((exercise) => {
            return (
              <li className='exercise' key={exercise.id}>
                <img src={exercise.gifUrl} alt={exercise.name}></img>

                <div>
                  <h4>{exercise.name}</h4>
                  <div className='iconsContainer'>
                    <div className='equipmentContainer'>
                      <Equipment />
                      <span>{exercise.equipment}</span>
                    </div>
                    <MuscleBadge muscleName={exercise.target} />
                  </div>
                </div>

              </li>
            )
          }
          )
        }
      </ul>
    </aside >
  )
}
