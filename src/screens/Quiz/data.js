import { View, Text , StyleSheet , TouchableOpacity , TextInput , KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

let questions = [
    {
        question: 'What is the capital of Louisiana',
        options: ["Baton Rouge", "New Orelans", "Shreveport", "Alexandria"],
        correct_option: "Baton Rouge"
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

export default Data;