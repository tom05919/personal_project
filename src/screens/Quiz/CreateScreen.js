import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { createQuiz } from '../../db';

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');

    const onQuizSave = async () => {
        const currentQuizId = Math.floor(Math.random() * 100000).toString();

        await createQuiz(currentQuizId, title, des)

        navigation.navigate('AddQuesScreen', {
            currentQuizId: currentQuizId,
            currentQuizTitle: title,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>CreateScreen</Text>
            </View>
            <Text style={styles.subText}>Title</Text>
            <CustomInput 
                placeholder={'enter the title of your quiz'}
                setValue={setTitle}
                value={title}
            />
            <Text style={styles.subText}>Description</Text>
            <CustomInput 
                placeholder={'enter the description of your quiz'}
                setValue={setDes}
                value={des}
            />
            <CustomButton 
             text='Save' 
             onPress={onQuizSave}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        alignItems: 'center',
    },
    subText: {
        textAlign: 'left',
        marginTop: 15
    }
})

export default CreateScreen