
import { useContext } from 'react'
import { FilterContext } from '../providers/FiltersProvider'
import { exercise } from '@/types/exercise'
import { useExercises } from './useExercises'


export const useFilters = () => {

	const { exercises: exercisesData } = useExercises();
	const { filters, setFilters } = useContext(FilterContext)


	const filterExercises = (exercises: exercise[]) => (
		exercises.filter(exercise =>
			(
				filters.bodyPart === '' ||
				exercise.bodyPart === filters.bodyPart
			) &&
			(
				filters.target === '' ||
				exercise.target === filters.target
			) &&
			(
				filters.equipment === '' ||
				exercise.equipment === filters.equipment
			)

		)
	)

	const filteredExercises = filterExercises(exercisesData)


	return ({
		filters,
		filteredExercises,
		setFilters
	})

}