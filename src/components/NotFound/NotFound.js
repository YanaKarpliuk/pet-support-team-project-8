import elements from "./NotFound.styled"
import { useEffect } from "react"
import makeHeightViewport from "../../hooks/makeHeightViewport"
import makeHeightAuto from "../../hooks/makeHeightAuto"

const { Container, Face } = elements

const NotFound = () => {

    useEffect(() => {
        makeHeightViewport()
        
        return (() => {
            makeHeightAuto()
        })
    }, [])
    return (
        <Container>
            <span>Unfortunately, nothing was found</span>
            <Face>-_-</Face>
        </Container>
    )
}
export default NotFound