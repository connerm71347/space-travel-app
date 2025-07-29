// SpacecraftCard.test.jsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Because SpacecraftCard uses <Link>
import SpacecraftCard from "../SpacecraftCard";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event"; //userEvent simulates real user behavior (like clicking buttons, typing into inputs).
//It’s better than fireEvent.click() because it mimics real interaction more closely.

//  Mock spacecraft object we'll pass to the component
const mockCraft = {
  id: 1,
  name: "Galactic Voyager",
  pictureUrl: "https://example.com/voyager.jpg",
};

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("SpacecraftCard", () => {
  test("renders spacecraft name and image", () => {
    //  What we're testing:
    // 1. The name "Galactic Voyager" appears in the document.
    // 2. The image is rendered with the correct alt text and src.

    renderWithRouter(<SpacecraftCard craft={mockCraft} onDestroy={vi.fn()} />);

    // Check for the spacecraft name
    const nameElement = screen.getByText(/galactic voyager/i);
    expect(nameElement).toBeInTheDocument();

    //  Check for the image with correct alt text
    const image = screen.getByAltText(/galactic voyager/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockCraft.pictureUrl);
  });
  test("calls onDestroy with craft ID when destroy button is clicked", async () => {
    const mockDestroy = vi.fn(); // Create mock function

    renderWithRouter(
      <SpacecraftCard craft={mockCraft} onDestroy={mockDestroy} />
    );

    const destroyButton = screen.getByRole("button", { name: /destroy/i });
    await userEvent.click(destroyButton); // Simulate the click

    expect(mockDestroy).toHaveBeenCalledTimes(1); // Assert it was called
    expect(mockDestroy).toHaveBeenCalledWith(mockCraft.id); // Assert it was called with the correct ID
  });
});
