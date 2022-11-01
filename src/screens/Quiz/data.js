import { View, Text , StyleSheet , TouchableOpacity , TextInput , KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

let questions = [];

export default data = () => {
    const [question, setQuestion] = useState('')
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [optionThree, setOptionThree] = useState('')
    const [optionFour, setOptionFour] = useState('')
    const [optionList, setOptionList] = useState([])
    const [answer, setAnswer] = useState()

    const makeQuestions = () => {
        Keyboard.dismiss();
        setOptionList([...optionList, optionOne]);
        setOptionOne(null);
        Keyboard.dismiss();
        setOptionList([...optionList, optionTwo]);
        setOptionTwo(null);
        Keyboard.dismiss();
        setOptionList([...optionList, optionThree]);
        setOptionThree(null);
        Keyboard.dismiss();
        setOptionList([...optionList, optionFour]);
        setOptionFour(null);
        
        console.log(question)
        console.log(answer)
        console.log(optionList)

        questions.push({
            question: question,
            options: optionList,
            correct_option: answer
        }) 
        setQuestion(null);
        setAnswer(null);
        setOptionList([]);
    }

    const resetQuestions = () => {
        questions = [];
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskContainer}
            >
                <CustomInput
                    placeholder={"Enter Question"}
                    value={question}
                    setValue={setQuestion}
                />
                <View>
                    <CustomInput
                        placeholder={"Enter choice 1"}
                        value={optionOne}
                        setValue={setOptionOne}
                    />
                    <CustomInput
                        placeholder={"Enter choice 2"}
                        value={optionTwo}
                        setValue={setOptionTwo}
                    />
                    <CustomInput
                        placeholder={"Enter choice 3"}
                        value={optionThree}
                        setValue={setOptionThree}
                    />
                    <CustomInput
                        placeholder={"Enter choice 4"}
                        value={optionFour}
                        setValue={setOptionFour}
                    />
                </View>
                <CustomInput
                    placeholder={"Enter correct answer"}
                    value={answer}
                    setValue={setAnswer}
                />
                <CustomButton
                    text={'Add'}
                    onPress={makeQuestions}
                />
                <CustomButton
                    text={'Reset questions'}
                    onPress={resetQuestions}
                />
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({

})

export { questions };



// export default data = [
//     {
//         question: "What’s the biggest planet in our solar system?",
//         options: ["Jupiter","Saturn","Neptune","Mercury"],
//         correct_option: "Jupiter"
//     },
//     {
//         question: "What attraction in India is one of the famus in the world?",
//         options: ["Chand Minar","Taj Mahal","Stadium"],
//         correct_option: "Taj Mahal"
//     },
//     {
//         question: "What land animal can open its mouth the widest?",
//         options: ["Alligator","Crocodile","Baboon","Hippo"],
//         correct_option: "Hippo"
//     },
//     {
//         question: "What is the largest animal on Earth?",
//         options: ["The African elephant","The blue whale","The sperm whale","The giant squid"],
//         correct_option: "The blue whale"
//     },
//     {
//         question: "What is the only flying mammal?",
//         options: ["The bat","The flying squirrel","The bald eagle","The colugo"],
//         correct_option: "The bat"
//     },
//     {
//         question: "What is 1+1?",
//         options: ["1","2","3","4"],
//         correct_option: "2"
//     }
// ]
