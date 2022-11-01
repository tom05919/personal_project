import { View, Text , StyleSheet , TouchableOpacity , TextInput , KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const data = () => {
    const [numQuestion, setNumQuestion] = useState(0)
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState('')
    const [optionList, setOptionList] = useState([])
    const [answer, setAnswer] = useState()
    let data = [];

    const makeQuestions = () => {
        for (var i = 0; i < numQuestion; i++) {
            data.push({
                question: question,
                options: options,
                correct_option: answer
            }) 
        }
    }

    const setChoiceOne = () => {

    }

    const setChoiceTwo = () => {
        
    }

    const setChoiceThree = () => {
        
    }

    const setChoiceFour = () => {
        
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
                        value={options}
                        setValue={setOptions}
                    />
                    <CustomButton
                        onPress={setChoiceOne}
                    />
                    <CustomInput
                        placeholder={"Enter choice 2"}
                        value={options}
                        setValue={setOptions}
                    />
                    <CustomButton
                        onPress={setChoiceTwo}
                    />
                    <CustomInput
                        placeholder={"Enter choice 3"}
                        value={options}
                        setValue={setOptions}
                    />
                    <CustomButton
                        onPress={setChoiceThree}
                    />
                    <CustomInput
                        placeholder={"Enter choice 4"}
                        value={question}
                        setValue={setOptions}
                    />
                    <CustomButton
                        onPress={setChoiceFour}
                    />
                </View>
                <CustomInput
                    placeholder={"Enter Question"}
                    value={question}
                    setValue={setQuestion}
                />
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default data;


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
