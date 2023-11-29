import { render, screen } from "@testing-library/react"
import GifExpertApp from "../GifExpertApp"

describe('testing <GifExpertApp> ', () => { 

    test('should show the title ', () => {
        const mainTitle = "GifExpertApp";
        const component = render(<GifExpertApp/>);
        expect(screen.getByText('GifExpertApp').textContent).toBe(mainTitle);
     })
 })