import elements from "./AddNoticeButton.styled"

const { MobBtn, Text, Btn } = elements;

const AddNoticeButton = () => {
    return (
        <div><MobBtn type="button">Add pet</MobBtn>
            <Text>Add pet <Btn type="button"></Btn></Text></div>

    )
}

export default AddNoticeButton