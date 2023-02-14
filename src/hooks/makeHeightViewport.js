const makeHeightViewport = () => {
    const section = document.querySelector("section")
    if (section === null) return
    section.style.height = "100vh"
}
export default makeHeightViewport