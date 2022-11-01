import { View, Text , StyleSheet , TouchableOpacity , TextInput , KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

let questions = [
    {
        question: 'What is the captial of Louisiana',
        options: ["Baton Rouge", "New Orelans", "Shreveport", "Alexandria"],
        correct_option: "Baten Rouge"
    },
    {
        question: "What color do you get when you mix red and blue",
        options: ["yellow", "orange", "green", "purple"],
        correct_option: "purple"
    },
    {
        question: "What's the square root of 64",
        options: ["5", "6", "7", "8"],
        correct_option: "8"
    },
    {
        question: "What year did America gain its independence",
        options: ["1775", "1776", "1777", "1778"],
        correct_option: "1776"
    }

];

const Data = () => {
    const [question, setQuestion] = useState('')
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [optionThree, setOptionThree] = useState('')
    const [optionFour, setOptionFour] = useState('')
    const [optionList, setOptionList] = useState([])
    const [answer, setAnswer] = useState()

    const makeQuestions = () => {
        setOptionList([...optionList, optionOne]);
        setOptionOne(null);
        setOptionList([...optionList, optionTwo]);
        setOptionTwo(null);
        setOptionList([...optionList, optionThree]);
        setOptionThree(null);
        setOptionList([...optionList, optionFour]);
        setOptionFour(null);

        console.log(question)
        console.log(answer)
        console.log(optionList)

        questions.push({
            question: "What's 1 + 1",
            options: ["0","1","2","3"],
            correct_option: "2"
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

export default Data;


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
