import elements from "./AddNoticeButton.styled"

const { MobBtn, Text, Btn, Cross, MobCross } = elements;

const AddNoticeButton = () => {
    return (
        <div><MobBtn type="button"><MobCross /> Add pet</MobBtn>
            <Text>Add pet <Btn type="button"><Cross /></Btn></Text></div>

    )
}

export default AddNoticeButton