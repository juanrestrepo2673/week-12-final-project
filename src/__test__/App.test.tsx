

/* Document used to setup this tests
https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07
*/

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from '../App';

describe('Renders main page correctly', async () => {

	it('Should render the page correctly', async () => {
		render(<App />);
		const h1 = await screen.queryByText('Shopping App');

		// Expectations
		expect(h1).toBeDefined()
	});


	it("should add the exercise to the 'routine' when pressing the 'add to the routine' button", async () => {
		render(<App />);

		const user = userEvent.setup();

		const addToRoutineButtons = await screen.findAllByRole("button", {
			name: /add to routine/i,
		});
		await user.click(addToRoutineButtons[0]);

		const showRoutineButton = await screen.getByRole("checkbox", {
			name: /show routine/i,
		});
		await user.click(showRoutineButton);

		// const quantity = screen.getByText( /quantity/i )

		const removeFromRoutineButton = screen.findByRole("button", { name: /remove from routine/i })

		expect(removeFromRoutineButton).not.toBeNull();


	});
});

