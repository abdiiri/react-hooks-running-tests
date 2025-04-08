import { render, screen } from "@testing-library/react";
import Header from "../components/Header"; // Update this path if needed

test("displays the text 'hello from the Header!'", () => {
  render(<Header />); // Render the Header component

  // Check if the text is in the document
  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
