const makeHeightAuto = () => {
    const section = document.querySelector("section")
    if (section === null) return
    section.style.height = "auto"
}
export default makeHeightAuto