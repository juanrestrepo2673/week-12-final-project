import { muscleName } from "./muscleName";

export interface exercise {
	bodyPart: string,
	equipment: string,
	gifUrl: string,
	id: string,
	name: string,
	target: muscleName | string,
	secondaryMuscles: string[],
	instructions: string[]
}