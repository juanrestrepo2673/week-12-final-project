import { exercise } from "@/types/exercise"
import exercisesMock from '../__mocks__/exercises(500).json'

/* good practice to use environment variables
because this information  can change */
const apiUrl = import.meta.env.VITE_API_URL

export const fetchExercises = async (): Promise<exercise[]> => {
	if (!apiUrl) {
		return exercisesMock;
	}

	const res = await fetch(`${apiUrl}/exercises`, {})
	if (!res.ok) {
		console.error('Error fetching exercises')
		return []
	}

	const exercises = await res.json()
	return exercises
}