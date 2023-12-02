import { useEffect, useState } from 'react'
import { fetchExercises } from '../services/exercises.service'
import { exercise } from '@/types/exercise'


export const useExercises = () => {

	const [exercises, setExercises] = useState<exercise[]>([])

	/* Using useEffect is a simple way to consume a service,
	using a state manager as React Query could be more complete  */

	useEffect(() => {
		fetchExercises()
			.then(exercises =>
				setExercises(exercises)
			)
			.catch(err => { console.error(err) })
	}, [])

	return { exercises };
}